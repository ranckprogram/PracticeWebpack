#! /usr/bin/env node

const fs = require('fs')
const path = require('path')
const babylon = require('babylon')
const traverse = require('babel-traverse').default
const babel = require('babel-core')
const entry = path.resolve('./', 'index.js')
let ID = 0

function createAsset(filename) {
    const content = fs.readFileSync(filename, 'utf-8')
    const ast = babylon.parse(content, {
        sourceType: "module",
    })
    const dependences = []
    traverse(ast, {
        ImportDeclaration: ({ node }) => {
            dependences.push(node.source.value)
        }
    })
    const { code } = babel.transformFromAst(ast, null, {
        presets: ['env']
    })
    return {
        id: ID++,
        filename,
        dependences,
        code,
    }
}


function createGraph(entry) {
    const mainAsset = createAsset(entry)
    console.log(mainAsset)
    const queue = [mainAsset]
    for (const asset of queue) {
        console.log('dirname', path.dirname(asset.filename))
        const dirname = path.dirname(asset.filename)
        const filename = asset.filename;
        asset.mapping = {}
        asset.dependences.forEach(relativePath => {
            const absolutePath = path.join(dirname, relativePath)
            const child = createAsset(absolutePath)
            asset.mapping[relativePath] = child.id
            queue.push(child)
        })
    }
    return queue
}

function bundle(graph) {
    let modules = ''
    graph.forEach(mod => {
        modules += `${mod.id}: [
            function (require, module, exports){
                ${mod.code}
            },
            ${JSON.stringify(mod.mapping)}
        ],`
    })
    const result = `(function(modules){
        function require(id) {
            // 根据id获取 function 和 mapping
            const [fn, mapping] = modules[id];
            
            function localRequire(relativePath){
              //根据模块的路径在mapping中找到对应的模块id
              return require(mapping[relativePath]);
            }
            const module = {exports:{}};
            //执行每个模块的代码。
            //对应上方的 function(require, module, exports)
            fn(localRequire,module,module.exports);
            return module.exports;
        }
        // 导入entry.js 代码
        require(0)
    }({
        ${modules}
    }))`
    return result
}

const graph = createGraph(entry)
const result = bundle(graph);
console.log(graph)
console.log('执行成功')
// console.log(path)
fs.writeFileSync("./bundle.js", result);

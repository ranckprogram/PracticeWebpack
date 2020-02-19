#! /usr/bin/env node

const fs = require('fs')
const path = require('path')
const babylon = require('babylon')
const traverse = require('babel-traverse').default
const babel = require('babel-core')
// console.log(traverse)
const entry = path.resolve('./', 'index.js')

function createAsset(fileName) {
    const content = fs.readFileSync(fileName, 'utf-8')
    const ast = babylon.parse(content, {
        sourceType: "module",
    })
    const dependences = []
    traverse(ast, {
        ImportDeclaration: ({ node }) => {
            dependences.push(node.source.value)
        }
    })
    const { code } = babel.transformFromAst(ast)
    return {
        fileName,
        dependences,
        code,
    }
}


function createGraph(entry) {
    const mainAsset = createAsset(entry)
    console.log(mainAsset)
    const queue = [mainAsset]

}

function bundle(graph) {
    const result = `(function(){

    }({

    }))`

}
createGraph(entry)
console.log('执行成功')
// console.log(path)
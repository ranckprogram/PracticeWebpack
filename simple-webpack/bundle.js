(function(modules){
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
        0: [
            function (require, module, exports){
                "use strict";

var _tools = require("./src/tools.js");

var _tools2 = _interopRequireDefault(_tools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_tools2.default);
console.log(666);
            },
            {"./src/tools.js":1}
        ],1: [
            function (require, module, exports){
                "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _a = require("./a.js");

var _a2 = _interopRequireDefault(_a);

var _component = require("./component.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_a.name);
console.log(_a2.default);
console.log('====');

console.log(_component.component);

exports.default = {
  name: 'ranck'
};
            },
            {"./a.js":2,"./component.js":3}
        ],2: [
            function (require, module, exports){
                "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
var name = exports.name = 'ranck';

function add(a, b) {
  return a + b;
}
            },
            {}
        ],3: [
            function (require, module, exports){
                "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MAX = exports.MAX = 20;
            },
            {}
        ],
    }))
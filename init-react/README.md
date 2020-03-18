# 手动搭建react项目


### 基础入门，第一阶段

1. 创建项目文件夹
```
mkdir init-react
```
2. 进入文件夹，初始化npm
```
cd init-react
npm init -y
```
3. 安装 react 运行依赖
```
npm i react react-dom
```
4. 安装开发依赖
```
npm i webpack webpack-cli -D
npm i @babel/core @babel/preset-react @babel/preset-env -D
npm i babel-loader -D
```
5. 创建目录，编写测试文件

```
|-index.js
|-index.html
|-src
 |-App.js
```

6. 配置webpack.config.js

```
const path = require('path')
const HtmlWbpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        })
    ]
}
```


7. 配置 .babelrc
```
{
    "presets": ["@babel/preset-react", "@babel/preset-env"]
}
```
8. 运行
```
npx webpack
```

到这里已经做到了一个简易版本的react项目，可以直接在dist中打开index.html看到结果，不过真实项目的各个方面还需要继续

---



### 第二阶段，项目级别，性能优化

- 基础配置强化
    - css文件
        - less-loader
        - css-loader
        - post-css
        - style-loader（另一种方式css提取）
    - 图片处理
        - file-loader
        - url-loader（重复没？设置文件大小限制）
    - 字体文件
    - 媒体文件
- 开发环境
    - 开发服务器配置
        - 热更新
        - 数据代理
        - 接口mock
    - 报错定位
    - 快速编译
        - 缩小文件遍历范围
        - 指定遍历路径
    - 

- 生产环境
    - 最小化文件
    - 


1. 安装devServer

```
npm i webpck-dev-server -D
```
配置
```javascript
// webpack.config.js

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    }
}

```
```json
{
    "scripte": {
        "start": "webpack-dev-server --open"
    }
}
```

2. css方面

安装loader

> 通常webpack只能处理js和json，通过loader可以处理其他格式的文件，loader执行顺序从后面开始执行

```
npm i css-loader style-loader stylus stylus-loader -D
```

css前缀兼容性可以通过 postcss处理

```bash
npm i postcss-loader autoprefixer -D
```

```javascript

```


### 第三阶段，性能优化

- 最小化依赖包导入
- tree shake
- 
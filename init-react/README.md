# 手动搭建react项目

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




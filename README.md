
### 0配置执行
```
webpack
```

### css加载
css-loader 处理css文件
style-loader 将css用style插入html
```
require('style-loader!css-loader!./assets/css/common.css')

```

### html-webpack-plugin插件使用
这是一个用于生成html生成的插件，预先提供一个模板

- html 清除注释，清除空格 minify


### 多页处理

- new htmlWebpackPlugin 多调用几次，传不同参数，引用不同的模板
- entry 定义多个 output 输出对应
- 每个页面指定chunks，或者排除chunk


### 一个假设

借助webpack实现自定义的组件化开发

正如今天我见到过的jquery组件化开发的那种，load读取html模板，页面上设置id，规定好组件，ajax掉数据渲染，样式统一写在common.css里面
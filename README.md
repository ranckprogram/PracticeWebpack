
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

### 一个假设

借助webpack实现自定义的组件化开发

正如今天我见到过的jquery组件化开发的那种，load读取html模板，页面上设置id，规定好组件，ajax掉数据渲染，样式统一写在common.css里面
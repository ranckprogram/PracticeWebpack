### 项目介绍

weback 是现阶段前端工程化开发的重的重要工具，系统性的学习掌握十分重要，我计划从

- 基础语法
- 简单实现
  - simple-webpack
  - 使用原生 nodejs 实现
- loader 编写
- plugin 编写
  - 一个类
  - 原型链上 apply 方法
  - hooks
- 项目实战
  - 代码分割（多团队，多项目共用模块）
  - 搭建 vue 项目
  - 搭建 react 项目
  - 搭建自定义项目
  - 形成脚手架
- 性能优化
  - 开发阶段快速构建
  - 打包过程优化
  - 部署后的加载优化
    - 首屏
    - 减少资源体积
    - 代码分割
    - 静态资源合理缓存
      - css 剥离

几个维度来系统性学习，所以这个练习项目就产生了

### 编写 loader

- 参数
- 参数校验
- 输出

### 编写 Plugin

- hooks

29个 hook

```javascript
var CompilerHooks = [
  "initialize",
  "shouldEmit",
  "done",
  "afterDone",
  "additionalPass",
  "beforeRun",
  "run",
  "emit",
  "assetEmitted",
  "afterEmit",
  "thisCompilation",
  "compilation",
  "normalModuleFactory",
  "contextModuleFactory",
  "beforeCompile",
  "compile",
  "make",
  "finishMake",
  "afterCompile",
  "watchRun",
  "failed",
  "invalid",
  "watchClose",
  "infrastructureLog",
  "environment",
  "afterEnvironment",
  "afterPlugins",
  "afterResolvers",
  "entryOption",
];

```

### 性能优化

多线程加速，缩小打包范围，减少体积，代码压缩，代码切割

loader 缩小范围

- test 特定文件后缀
- include 指定目标目录
-

- Happypack 开启任务多线程
- 动态链接库文件 DDlPlugin，缓存打包好的文件，减少打包数量

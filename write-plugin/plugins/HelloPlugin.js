class HelloPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    // console.log("webpack hooks", Object.keys(compiler.hooks));
    compiler.hooks.done.tap("MYWebpackPlugin", (compilation) => {
      console.log("webpack compilation hooks",compilation.compilation,  Object.keys(compilation));
      console.log("options", this.options);
    });
  }
}

module.exports = HelloPlugin;

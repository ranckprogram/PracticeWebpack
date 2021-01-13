class HelloPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    console.log(compiler.hooks)
    compiler.hooks.done.tap("MYWebpackPlugin", () => {
      console.log(this.options);
    });
  }
}

module.exports = HelloPlugin;

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const HelloPlugin = require("./plugins/HelloPlugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "[name]-[hash].js",
  },
  module: {
    rules: [
      // {
      //   test: /\.csv$/,
      //   use: ["csv-loader"],
      // },
      {
        test: /\.csv$/,
        use: [
          {
            loader: path.resolve(__dirname, "csv-loader.js"),
            options: {
              haha: "haha",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HelloPlugin({
      pluginOption: "pluginOption======",
    }),
  ],
};

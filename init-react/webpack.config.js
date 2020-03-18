const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    optimization: {
        minimizer: [
            //   new UglifyJsPlugin({
            //     cache: true,
            //     parallel: true,
            //     sourceMap: true // set to true if you want JS source maps
            //   }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /.js$/, // /\.js$/
                use: 'babel-loader'
            },
            {
                test: /.(css|styl)$/,
                use: [
                //     MiniCssExtractPlugin.loader,
                //     // 'style-loader',
                // 'css-loader',
                // 'postcss-loader',
                // 'stylus-loader'
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    // {
                    //     loader: 'style-loader'
                    // },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'stylus-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    }

}
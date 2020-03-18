const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
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
                    {
                        loader: 'style-loader'
                    },
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
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    }

}
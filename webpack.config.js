var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	// context: '', // 上下文，运行配置的上下文
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'js/mari.js',
		publicPath: 'http://cdn.bootcdn.com/'
	},
	plugins: [
		new htmlWebpackPlugin({
			// filename: 'index-[hash].html',
			filename: 'index.html',
			template: 'index.html',
			title: 'ranck home page'
		})
	]
}
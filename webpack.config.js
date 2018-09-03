var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	// context: '', // 上下文，运行配置的上下文
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'js/mari.js',
		// publicPath: 'http://cdn.bootcdn.com/'
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: {
				loader: 'babel-loader'
			}
		}, {
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					}, {
						loader: "css-loader"
					}
				]
			}
		
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			// filename: 'index-[hash].html',
			filename: 'index.html',
			template: 'index.html',
			title: 'ranck home page'
		})
	],
	devServer: {
		// contentBase: '',
		open: true,
		// inline: true,
		progress: true,
		proxy: {
			'/api': {
				target: 'http://192.168.17.1:3000',
				secure: false
			}
		}
	}
}
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, 'src/index.html'),
	// filename: 'index.html' // default value
})

module.exports = {
	mode: 'development',
	devtool: false,
	plugins: [
		htmlPlugin
	],
	module: {
		rules:[
			{ 
				test: /\.m?js$/,
				exclude:/node_modules/,
				use: 'babel-loader'
			}
		]
	}
}
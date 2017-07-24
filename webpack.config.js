'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// file for webpack to watch
	entry: './app/index.js',
	// where to output the bundled js
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	// loaders or compilers
	module : {
		loaders: [
			{ 
				test: /\.js$/, 
				exclude: /(node_modules)/,  
				loader: 'babel-loader', 
			},
			{ 
				test: /\.css$/, 
				loader: [
				'style-loader',
				'css-loader' 
				]
			}
		]
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [new HtmlWebpackPlugin({
		template: './app/index.html'
	})]
};
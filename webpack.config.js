'use strict'
const path = require('path');

module.exports = {
	// file for webpack to watch
	entry: './app/index.js',
	// where to output the bundled js
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	// loaders or compilers
	module : {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader' },
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
		]
	},
};
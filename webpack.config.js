var path = require('path');
var webpack = require('webpack');

var config = {
	entry: [
		'./src/index.js'
	],
	output : {
		path : path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: true
			}
		})
	],
	module : {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				include: path.join(__dirname, 'src')
			}
		]
	}

};

module.exports = config;
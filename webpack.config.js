var path = require('path');
var webpack = require('webpack');

var config = {
	entry: [
		'./src/index' //index.js is invalid entry
	],
	output : {
		path : path.join(__dirname, 'dist'),
		filename: 'app.bundle.js'
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
				loaders: 'babel-loader', //This should not be array
				include: path.join(__dirname, 'src'),
				query: {
					presets: ['es2015']
				}
			}
		]
	}

};

module.exports = config;
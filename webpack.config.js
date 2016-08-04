const webpack = require('webpack');
const path = require('path');

// module.exports = {
// 	entry: './src/main.js',
// 	output: {
// 		path: './bin',
// 		filename: 'main.bundle.js'
// 	},
// 	module: {
// 		loaders: [{
// 			test: /\.js$/,
// 			exclude: /node_modules/,
// 			loader: 'babel-loader?presets[]=es2015'
// 		}]
// 	}
// };

// module.exports = {
// 	entry : {
// 		bundle1: './main.js',
// 		bundle2: ['./entry1.js','./entry2.js']
// 	},
// 	output: {
// 		path: __dirname + './bin',
// 		filename: '[name].js'
// 	},
// 	module: {
// 		loaders: [{
// 			test: /\.js$/,
// 			exclude: /node_modules/,
// 			loader: 'babel?presets[]=es2015'
// 		}]
// 	}
// }

// module.exports = {
// 	entry: {
// 		bundle1: './main.js',
// 		bundle2: ['./entry1.js','./entry2.js']
// 	},
// 	output: {
// 		path: __dirname + '/bin',
// 		filename: '[name].js'
// 	},
// 	module: {
// 		loaders: [
// 			{
// 				test: /\.js$/,
// 				exclude: /node_modules/,
// 				loader: 'babel',
// 				query: {
// 					presets: ['es2015']
// 				}
// 			}
// 		]
// 	}
// };

module.exports = {
	entry: './hello_world_main.js',
	output: {
		path: path.resolve(__dirname),
		filename: 'react_bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel',
			query: {
				presets: ['es2015','react']
			},
			exclude: /node_modules/,
		}]
	}
};


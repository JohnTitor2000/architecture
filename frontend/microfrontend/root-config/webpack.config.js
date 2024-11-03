const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'root-config.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'system',
	},
	devServer: {
		historyApiFallback: true,
	},
};
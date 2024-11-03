const path = require('path');

module.exports = {
	entry: './src/index.js', // Точка входа для auth-модуль
	output: {
		filename: 'auth-microfrontend.js', // Уникальное имя выходного файла
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd', // Для поддержки Single SPA
		publicPath: 'http://localhost:8081/', // Путь для загрузки микрофронтенда
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devServer: {
		port: 8081, // Уникальный порт для auth-модуля
		historyApiFallback: true,
		headers: {
			'Access-Control-Allow-Origin': '*', // Для поддержки CORS
		},
	},
};
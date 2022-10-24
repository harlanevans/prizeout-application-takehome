const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const buildPath = path.resolve(__dirname, 'dist');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: {
        index: './src/index.tsx'
    },
    output: {
        filename: '[name].[hash:20].js',
        path: buildPath,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
			{
                test: /\.(js|jsx)$/,
                enforce: 'pre',
				// use: ['source-map-loader'],
				loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
					],
					'plugins': [
						'@babel/plugin-proposal-class-properties'
					]
                }
            },
			{
				test: /\.(less|css)$/,
				loaders: [
					'style-loader', 
					'css-loader', 
					'less-loader'
				]
			}
        ]
	},
	resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {
            dist: path.join(__dirname, './dist'),
            src: path.join(__dirname, './src'),
        },
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html',
        }),
    ]
};

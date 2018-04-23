
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');

//for beauty code html afer render
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

module.exports = {
  	entry:{
		  script :  './src/scripts/index.js',
  	},
  	devtool : "eval",
	output: {
		filename: 'scripts/[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
	    loaders: [
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{ 
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			{ 
				test: /\.html$/,
				exclude: /node_modules/,
				loader : "swig-loader"
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				exclude: /node_modules/
			}
		]
	},
	plugins: [

		//for css
		new ExtractTextPlugin({
			filename: "styles/style.bundle.css"
		}), 

		//for source origin
		new CopyWebpackPlugin([
			{ from: './src/origin', to:'./origin'},
		]),

		//for favicon
		new CopyWebpackPlugin([
			{ from: './src/favicon.ico', to:'./favicon.ico'},
		]),
		new HtmlBeautifyPlugin(),
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/index.html',
			filename:  'index.html'
		}),
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/home.html',
			filename:  'home.html'
		}),
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/auditors.html',
			filename:  'auditors.html'
		}),
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/companies.html',
			filename:  'companies.html'
		}),
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/users-groups.html',
			filename:  'users-groups.html'
		}),
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/users-roles.html',
			filename:  'users-roles.html'
		}),
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/users-users.html',
			filename:  'users-users.html'
		}),
		
	
    ]
};
var htmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
module.exports = {
	entry: './src/script/main.js',
	output:{
		path: path.resolve(__dirname+'/dist'),
		filename: 'js/[name]-[chunkhash].js'
	},

	plugins:[
		new htmlWebpackPlugin({
			filename: 'index-[hash].html',
			template: 'index.html',
			inject:'head',
			title: 'webpack is good',
			minify:{   
				removeComments:true,  //移除注释
				collapseWhitespace:true  //移除空格
			}
		})
	]
}
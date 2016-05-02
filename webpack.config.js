/**
 * Created by slashhuang on 16/4/7.
 */
var path = require("path");
var webpack =require('webpack');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        index: "./app/src/index"
    },
    output: {
        path: path.join(__dirname, 'app/'),//必须是绝对路径
        filename: 'bundle.js',
        publicPath: "/static/"//调试地址为相对路径,它会观察所有bundle的文件，从此publicPath更新内存中的js文件获取
    },
    module:{
        loaders: [
            {
                test: /\.less/,
                loaders:["style-loader", "css-loader","less-loader"]
            },
            {
                test: /\.js|\.jsx$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader','babel-loader']
            }
        ],
        resolve: {
            extensions: ['.js','.less']
        }
    },
    plugins: [
        //new ExtractTextPlugin(path.join('showHacker.css'))
        new webpack.HotModuleReplacementPlugin()
    ]
};
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
let webpack = require('webpack');

let APP_FILE = path.resolve(__dirname, './src/index.js');
let OUT_PATH = path.resolve(__dirname, './dist');
let TEM_PATE = path.resolve(__dirname, './src/templates/template.html');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'react-hot-loader/patch', // 激活HMR
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        APP_FILE,
    ],
    output: {
        filename: 'boudle.js',
        path: OUT_PATH,
        publicPath: '/',
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
        }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.(png|jpg|jpeg|gif|eot|svg|ttf|woff|woff2)$/,
            loaders: ['url-loader?limit=8192'],
        }, {
            test: /\.(png|jpg|jpeg|gif|eot|svg|ttf|woff|woff2)$/,
            use: ['file-loader?name=[name].[ext]?[hash]'],
        }, {
            test: /\.jsx?$/,
            use: ['babel-loader'],
            exclude: /node_modules/,
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react demo',
            template: TEM_PATE,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        publicPath: '/',
        port: 7077,
    },
};
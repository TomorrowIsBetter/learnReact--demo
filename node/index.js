var express = require('express');
var app = express();
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config.js');


var isProduction = process.env.NODE_ENV === 'production';
var isDeveloping = !isProduction;

if (isDeveloping) {
    var complier = webpack(config);
    app.use(webpackDevMiddleware(complier, {
        publicPath: config.output.publicPath,
    }));
    app.use(webpackHotMiddleware(complier));
}

var server = app.listen(7077, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
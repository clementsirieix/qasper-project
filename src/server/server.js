var express = require('express'),
    path = require('path'),
    config = require('../../webpack.config.js');
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware');

var app = express(),
    compiler = webpack(config),
    port = 3000;

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static('./dist'));

app.use('/', function(req, res) {
    res.sendFile(path.resolve('dist/index.html'));
});

app.listen(port, function(error) {
    if(error) throw error;
    console.log('express server running on localhost:', port);
});

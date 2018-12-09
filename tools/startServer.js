"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var webpack = require("webpack");
var path = require("path");
var config = require('../webpack.dev');
var port = 3003;
var app = express();
var compiler = webpack(config);
app.use('/assets', express.static(path.join(__dirname, '../src/assets/')));
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));
app.get('*', function (req, res) {
    // console.log(`${req.url}_f`);
    res.sendFile(path.join(__dirname, '../src/index.html'));
});
app.listen(port, function (err) {
    if (err) {
        console.info('start');
        console.info(err);
    }
    else {
        // colors.yellow;
        console.info(("http://localhost:" + port).yellow);
        // open(`http://localhost:${port}`);
    }
});

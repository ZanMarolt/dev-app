// import the library
var express = require('express');
var bodyParser = require('body-parser');

var PORT = 8000;

// initiate the server
var server = express();

var serveStatic = require('serve-static');
server.use('/dev', serveStatic('angular-dev'));
server.use('/public', serveStatic('public'));

var router = require('./router');

exports.start = function() {
    server.use(bodyParser());
    server.use(bodyParser.urlencoded());
    server.use(bodyParser.json());

    server.listen(PORT, function () {
        console.log('Server running on port: ' + PORT)
        router(server);
    });
};

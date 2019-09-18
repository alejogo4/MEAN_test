var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.get('/', function(req, res) {
    res.send('Hello aa');
})


var server = app.listen(3000, function() {

})
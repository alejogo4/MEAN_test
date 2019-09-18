var express = require('express');
var properties = require('./config/properties');
var db = require('./config/database');
var app = express();

// call the database connectivity function
db();

app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on ${properties.PORT} port.`);
})
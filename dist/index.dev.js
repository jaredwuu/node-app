"use strict";

var express = require('express');

var app = express();
app.get('/', function (req, res) {
  res.send('<h1>My Node App<h1>');
});
app.listen(5000, function () {
  console.log('Server up and running');
});
var express = require('express'),
  http = require('http');

var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 3000);
  app.use(express.directory(__dirname));
  app.use(express.static(__dirname));
});

module.exports = app.listen(app.get('port'));

console.log("hello");

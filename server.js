var express = require('express');
var app = express();
var rutaschileras = require('./src/rutas')
var port = process.env.PORT || 3000

app.use(express.static('public'));

app.listen(port, function () {
  console.log('Example app listening on port '+port);
});

app.use('/api',rutaschileras);

app.get('/algo', function (req, res) {
  res.send('Nada');
});
/*
app.use('/static', express.static('public'));
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

  fs.readFile('./public/index.html', function (err, data) {

    res.writeHead(200, {
      'Content-Type': 'text/html'

    });
    res.write(data);
    res.end();

  });

}).listen(8080);*/
//api
var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds161146.mlab.com:61146/peliculass', {
  useMongoClient: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error;'));
db.once('open', function () {

});

var laspeliculas = mongoose.Schema({
  title: String,
  image: String,
  release: String,
  description: String,
  genre: String
});

var rutas = express.Router();

var Accion = mongoose.model('GenAccion', laspeliculas, 'GenAccion');
var Comedia = mongoose.model('GenComedia', laspeliculas, 'GenComedia');
var Drama = mongoose.model('GenDrama', laspeliculas, 'GenDrama');
var Horror = mongoose.model('GenHorror', laspeliculas, 'GenHorror');
var Misterio = mongoose.model('GenMystery', laspeliculas, 'GenMystery');
var Thriller = mongoose.model('GenThriller', laspeliculas, 'GenThriller');

rutas.route('/AccionturboHD4K').get(function (req, res) {
  Accion.find({}, function (err, Accion) {
    if (err) return console.error(err);
    res.json(Accion);
  })
})

rutas.route('/Misemestre').get(function (req, res) {
  Comedia.find({}, function (err, Comedia) {
    if (err) return console.error(err);
    res.json(Comedia);
  })
})

rutas.route('/Drama').get(function (req, res) {
  Drama.find({}, function (err, Drama) {
    if (err) return console.error(err);
    res.json(Drama);
  })
})

rutas.route('/Ceroenkardex').get(function (req, res) {
  Horror.find({}, function (err, Horror) {
    if (err) return console.error(err);
    res.json(Horror);
  })
})

rutas.route('/Aunnosubencalificacion').get(function (req, res) {
  Misterio.find({}, function (err, Misterio) {
    if (err) return console.error(err);
    res.json(Misterio);
  })
})

rutas.route('/69enkardex').get(function (req, res) {
  Thriller.find({}, function (err, Thriller) {
    if (err) return console.error(err);
    res.json(Thriller);
  })
})

rutas.route('/vamanas').get(function (req, res) {
  res.send('ando pedo');
});

// respond with "hello world" when a GET request is made to the homepage
/*app.get('/vamanas', function(req, res) {
  res.send('ando pedo');
});*/

module.exports = rutas;
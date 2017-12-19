//Declarando las librerias correspondientes//
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();


//app.get('/', function(req, res){
var getMovieDetall = function (url) {

    return new Promise((resolve, reject) => {

        request(url, function (error, response, html) {

            if (!error) {
                var $ = cheerio.load(html);
                const arr = []

                $('.detailed').filter(function () {

                    const json = {
                        title: "",
                        image: "",
                        release: "",
                        description: "",
                        genre: ""
                    };
                    console.log("*-*-*-*-*-*-*-*-");

                    var data = $(this);
                    title = data.title = data.children().eq(2).children().eq(1).text().trim();
                    image = data.image = data.children().eq(1).children().first().find('img').attr('src');
                    release = data.release = data.children().eq(2).children().eq(2).text().trim();
                    description = data.description = data.children().eq(2).children().eq(5).text().trim();
                    genre = data.genre = data.children().eq(2).children().eq(7).text().trim();

                    json.title = title;
                    json.image = image;
                    json.release = release;
                    json.description = description;
                    json.genre = genre;

                    console.log(json);
                    arr.push(json)
                })

                resolve(arr)
            }
        })
    });

    res.json(json);
}

//Inserto las URL del scrapper//
const url_comedy = 'http://www.imdb.com/genre/comedy?ref_=rlm_gnr';

getMovieDetall(url_comedy).then(result => {
    console.log(result);
    const content = JSON.stringify(result);

    fs.writeFile("./scrapper.json", content, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("El archivo ha sido salvado");
    });
});

//})
/*
app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;
*/
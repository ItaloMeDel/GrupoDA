var express = require('express')
var app = express()
var mysql = require('mysql')
var bodyParser = require('body-parser')

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'barbershop',
    user: 'root',
    password: ''
});

connection.connect(function (err) {
    if (err) throw err
    console.log('Se conectó a la BD');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true 
}));

app.get('/books', function(req, res){
    connection.query('SELECT * FROM books', function(error, results){
        if (error) {
            res.end(JSON.stringify(results))
        }
    });
});
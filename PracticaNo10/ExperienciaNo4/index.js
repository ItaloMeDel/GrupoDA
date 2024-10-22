var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('Hola mundo desde Express');
});

app.get('/login', function(req, res) {
    res.send('Aquí se mostraría la página del login');
});

app.listen(3000, function() {
    console.log('La aplicación está funcionando en el puerto 3000');
});

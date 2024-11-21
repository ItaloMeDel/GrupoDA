const express = require('express');
const app = express();
const rutas = require('./rutas'); // Importa el archivo rutas.js

// Usar el enrutador definido en rutas.js
app.use('/', rutas);

// Iniciar el servidor
const puerto = 3000;
app.listen(puerto, () => {
 console.log(`El servidor está escuchando en el puerto ${puerto}`);
});

const express = require('express');
const router = express.Router();

// Importar el router de cursos
const cursosRouter = require('./cursos');

// Usar el router de cursos para las rutas que comienzan con /cursos
router.use('/cursos', cursosRouter);
// Otras rutas en rutas.js
// ...
module.exports = router;

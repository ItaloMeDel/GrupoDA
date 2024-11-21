const express = require('express');
const router = express.Router();

// Ruta para la página principal
router.get('/', (req, res) => {
    res.send('¡Hola desde la página principal!');
});

// Ruta con parámetro de ruta
router.get('/cursos/:id', (req, res) => {
    const idCurso = req.params.id;
    res.send(`Estás viendo el curso con ID: ${idCurso}`);
});

// Ruta con parámetros de consulta
router.get('/cursos', (req, res) => {
    const tema = req.query.tema;
    res.send(`Estás viendo cursos sobre el tema: ${tema}`);
});

module.exports = router;
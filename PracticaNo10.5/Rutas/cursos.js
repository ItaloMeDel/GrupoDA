const express = require('express');
const router = express.Router();
// Simulación de datos de cursos

const cursos = [
    { id: 1, nombre: 'Programación en Python', tema: 'programacion' },
    { id: 2, nombre: 'Cálculo I', tema: 'matematicas' }
];

// Ruta para obtener todos los cursos
router.get('/', (req, res) => {
    res.json(cursos);
});

// Ruta para obtener un curso por ID
router.get('/:id', (req, res) => {
    const curso = cursos.find(c => c.id === parseInt(req.params.id));
    if (!curso) {
        return res.status(404).send('Curso no encontrado');
    }
    res.json(curso);
});

module.exports = router;

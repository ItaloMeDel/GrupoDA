const express = require('express');
const { login } = require('../controllers/authController');

const router = express.Router();

// Ruta para manejar GET en /api/auth
router.get('/', (req, res) => {
    res.send('Bienvenido al sistema de autenticación de la tienda de electrodomésticos.');
});

// Ruta POST para iniciar sesión
router.post('/login', login);

module.exports = router;

const express = require('express');
const { login } = require('../controllers/authController');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bienvenido al sistema de autenticación de la tienda de electrodomésticos.');
});

router.post('/login', login);

module.exports = router;

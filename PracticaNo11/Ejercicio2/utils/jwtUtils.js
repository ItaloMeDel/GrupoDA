const jwt = require('jsonwebtoken');

// Función para generar el token
const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '15s' }); 
};

module.exports = { generateToken };

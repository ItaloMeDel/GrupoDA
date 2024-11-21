const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // Obtener el token del encabezado Authorization
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'Token no proporcionado' });
    }

    // Verificar el formato del token (espera 'Bearer <token>')
    if (!token.startsWith('Bearer ')) {
        return res.status(403).json({ message: 'Token malformado' });
    }

    try {
        // Eliminar 'Bearer ' y verificar el token
        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
        req.user = decoded; // Guardar la información del usuario decodificada en req.user
        next(); // Llamar al siguiente middleware o ruta
    } catch (err) {
        res.status(401).json({ message: 'Token inválido o expirado' });
    }
};

module.exports = { verifyToken };

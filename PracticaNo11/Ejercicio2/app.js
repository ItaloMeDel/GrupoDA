require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Ruta raíz
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de la Tienda de Electrodomésticos');
});

// Manejo de errores
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});


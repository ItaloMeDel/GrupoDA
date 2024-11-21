require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de la Tienda de Electrodomésticos');
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
});


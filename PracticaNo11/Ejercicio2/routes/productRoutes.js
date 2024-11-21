const express = require('express');
const { getProducts } = require('../controllers/productsController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', verifyToken, getProducts);

module.exports = router;

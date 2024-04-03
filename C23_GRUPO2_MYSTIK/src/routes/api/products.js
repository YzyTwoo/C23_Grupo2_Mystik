const express = require('express');
const router = express.Router();

const { allProducts,productByID } = require('../../API/productsController');

/* API routes */
router
.get('/api/products', allProducts)
.get('/api/products/:id', productByID)
  

module.exports = router
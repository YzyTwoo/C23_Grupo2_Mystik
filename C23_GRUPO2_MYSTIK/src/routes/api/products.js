const express = require('express');
const router = express.Router();

const { allProducts, productId,productAdd } = require('../../API/productsController');

/* API routes */
router
  .get('/api/products', allProducts)
  .get('/api/products/:id', productId)
  .post('/api/products',productAdd)

module.exports = router
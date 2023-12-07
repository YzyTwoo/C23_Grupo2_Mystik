var express = require('express');
var router = express.Router();
const productosControllers = require('../controllers/productosControllers');

/* GET home page. */
router.get('/detalle/:id', productosControllers.detalleProducts);
router.get('/carrito', productosControllers.carritoProducts)

module.exports = router;
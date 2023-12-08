var express = require('express');
var router = express.Router();
const productosControllers = require('../controllers/productosControllers');

/* GET home page. */
router.get('/detalle/:id', productosControllers.detalleProducts);
router.get('/carrito', productosControllers.carritoProducts)
router.get('/dashboard', productosControllers.dashboard)



router.get('/cargaProducto', productosControllers.cargaProducto)
router.post('/cargaProducto', productosControllers.cargaProducto)

module.exports = router;
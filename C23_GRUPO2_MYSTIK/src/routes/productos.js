var express = require('express');
var router = express.Router();
const productosControllers = require('../controllers/productosControllers');




/* GET home page. */
router.get('/detalle/:id', productosControllers.detalleProducts);
router.get('/carrito', productosControllers.carritoProducts);
router.get('/dashboard', productosControllers.dashboard);

/*edistar productos*/

router.get('/editarProducto', productosControllers.editarProducto);
router.post('/editarProducto', productosControllers.editarProducto);

/*carga de productos*/

router.get('/cargaProducto', productosControllers.cargaProducto);
router.post('/cargaProducto', productosControllers.cargaProducto);

/*crear productos*/

router.get('/create', productosControllers.vistacrear);
router.post('/create', productosControllers.create);

module.exports = router;
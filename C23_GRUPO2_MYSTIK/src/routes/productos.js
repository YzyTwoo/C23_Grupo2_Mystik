var express = require('express');
var router = express.Router();
const {detalleProducts, cargaProducto, dashboard, editarProducto, carritoProducts, viewProducts, vistacrear, create} = require('../controllers/productosControllers');

/* GET home page. */
router.get('/detalle/:id', detalleProducts);
router.get('/', viewProducts)
router.get('/carrito', carritoProducts);
router.get('/dashboard', dashboard);

/*editar productos*/


/*carga de productos*/

router.get('/editarProducto', editarProducto);
router.post('/editarProducto', editarProducto);

router.get('/cargaProducto', cargaProducto);
router.post('/cargaProducto', cargaProducto);

router.get('/create', vistacrear);
router.post('/create', create);

module.exports = router;
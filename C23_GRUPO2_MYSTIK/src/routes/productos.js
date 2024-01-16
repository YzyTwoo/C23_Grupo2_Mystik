var express = require('express');
var router = express.Router();
const {detalleProducts, cargaProducto, dashboard, formEditarProducto, editarProducto, carritoProducts, viewProducts, vistacrear, create, destroy} = require('../controllers/productosControllers');

/* GET home page. */
router.get('/detalle/:id', detalleProducts);
router.get('/', viewProducts)
router.get('/carrito', carritoProducts);
router.get('/dashboard', dashboard);

router.get('/formEditarProducto/:id', formEditarProducto);
router.put('/editarProducto/:id', editarProducto);


/*carga de productos*/

router.get('/cargaProducto', cargaProducto);
router.post('/cargaProducto', cargaProducto);

router.get('/create', vistacrear);
router.post('/create', create);

router.delete('/delete/:id', destroy); 

module.exports = router;
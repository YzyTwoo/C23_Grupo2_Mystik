var express = require('express');
var router = express.Router();
const {detalleProducts, cargaProducto, dashboard, formEditarProducto, editarProducto, carritoProducts, viewProducts, vistacrear, create, destroy} = require('../controllers/productosControllers');
const sessionValidate = require('../middlewares/sessionValidate');
const isAdminValidate = require('../middlewares/isAdminValidate');

/* GET home page. */
router.get('/detalle/:id', detalleProducts);
router.get('/', viewProducts)
router.get('/carrito', sessionValidate,carritoProducts);
router.get('/dashboard', isAdminValidate ,dashboard);

router.get('/formEditarProducto/:id', isAdminValidate, formEditarProducto);
router.put('/editarProducto/:id', isAdminValidate, editarProducto);


/*carga de productos*/

router.get('/cargaProducto', isAdminValidate, cargaProducto);
router.post('/cargaProducto', isAdminValidate, cargaProducto);

router.get('/create', isAdminValidate, vistacrear);
router.post('/create', isAdminValidate, create);

router.delete('/delete/:id', isAdminValidate, destroy); 

module.exports = router; 
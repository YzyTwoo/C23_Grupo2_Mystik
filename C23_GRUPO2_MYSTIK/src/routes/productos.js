var express = require('express');
var router = express.Router();
const multer = require('multer');
const {detalleProducts, cargaProducto, dashboard, formEditarProducto, editarProducto, agregarAlCarrito , vistaCarrito, viewProducts, vistacrear, create, destroy} = require('../controllers/productosControllers');
const isAdminValidate = require('../middlewares/isAdminValidate');
const sessionValidate = require('../middlewares/sessionValidate');
const editProductValidator = require('../validations/editProductValidator');
const createProductValidator = require('../validations/createProductValidator');
const path = require('path');


const storage = multer.diskStorage({ 
   destination: function (req, file, cb) { 
      cb(null, (path.join(__dirname,"../","../","/public/images/products"))); 
   }, 
   filename: function (req, file, cb) { 
      cb(null, `${Date.now()}_img_product_${path.extname(file.originalname)}`);  } 
})

const uploadFile = multer({ storage:storage }); 

/* GET home page. */
router.get('/detalle/:id', detalleProducts);
router.get('/', viewProducts)
router.get('/dashboard', isAdminValidate, dashboard);

router.get('/formEditarProducto/:id', isAdminValidate, formEditarProducto);
router.put('/editarProducto/:id', isAdminValidate, uploadFile.single('image'), editProductValidator, editarProducto);

router.get('/carrito', vistaCarrito)

router.post('/productos/:idProducto/agregar-al-carrito', agregarAlCarrito)
/*carga de productos*/

router.get('/cargaProducto', isAdminValidate, cargaProducto);
router.post('/cargaProducto', isAdminValidate, cargaProducto);


router.get('/create', isAdminValidate, vistacrear);
router.post('/create', isAdminValidate, uploadFile.single('imagen_id'), createProductValidator, create);

router.delete('/delete/:id', isAdminValidate, destroy); 

module.exports = router; 
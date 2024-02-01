var express = require('express');
var router = express.Router();
const multer = require('multer');
const {detalleProducts, cargaProducto, dashboard, formEditarProducto, editarProducto, carritoProducts, viewProducts, vistacrear, create, destroy} = require('../controllers/productosControllers');
const path = require('path');
const sessionValidate = require('../middlewares/sessionValidate');
const isAdminValidate = require('../middlewares/isAdminValidate');

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
router.get('/carrito', sessionValidate,carritoProducts);
router.get('/dashboard', isAdminValidate ,dashboard);

router.get('/formEditarProducto/:id', isAdminValidate, formEditarProducto);
router.put('/editarProducto/:id', isAdminValidate, uploadFile.single('image'), editarProducto);


/*carga de productos*/

router.get('/cargaProducto', isAdminValidate, cargaProducto);
router.post('/cargaProducto', isAdminValidate, cargaProducto);


router.get('/create', isAdminValidate, vistacrear);
router.post('/create', isAdminValidate, uploadFile.single('image'), create);

router.delete('/delete/:id', isAdminValidate, destroy); 

module.exports = router; 
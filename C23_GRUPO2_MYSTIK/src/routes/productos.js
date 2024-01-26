var express = require('express');
var router = express.Router();
const multer = require('multer');
const {detalleProducts, cargaProducto, dashboard, formEditarProducto, editarProducto, carritoProducts, viewProducts, vistacrear, create, destroy} = require('../controllers/productosControllers');
const adminValidate = require('../middlewares/adminValidate');
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
router.get('/carrito', carritoProducts);
router.get('/dashboard', adminValidate, dashboard);

router.get('/formEditarProducto/:id', formEditarProducto);
router.put('/editarProducto/:id',uploadFile.single('image'), editarProducto);


/*carga de productos*/

router.get('/cargaProducto', cargaProducto);
router.post('/cargaProducto', cargaProducto);

router.get('/create', vistacrear);
router.post('/create', uploadFile.single('image'),create);

router.delete('/delete/:id', destroy); 

module.exports = router;
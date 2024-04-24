var express = require('express');
var router = express.Router();
const indexControllers = require('../controllers/indexControllers')

/* GET home page. */
router.get('/', indexControllers.index);

router.get("/informacion",indexControllers.informacion)

router.get("/tienda",indexControllers.tienda)

module.exports = router;
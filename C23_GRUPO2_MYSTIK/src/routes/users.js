var express = require('express');
var router = express.Router();
const usersControllers = require('../controllers/usersControllers');
const sessionValidate = require('../middleware/sessionValidate');


/* GET home page. */
router.get('/login', usersControllers.ingreso);
router.get('/registro', usersControllers.register);
// router.get('/perfil', sessionValidate, usersControllers.perfil)
module.exports = router;
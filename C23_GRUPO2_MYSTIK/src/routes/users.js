var express = require('express');
var router = express.Router();
const {ingreso, register, perfil} = require('../controllers/usersControllers');

/* GET home page. */
router.get('/login', ingreso);
router.get('/registro', register);

/* Editar Perfil Usuario. */
router.get('/editar/:id', perfil);


module.exports = router;
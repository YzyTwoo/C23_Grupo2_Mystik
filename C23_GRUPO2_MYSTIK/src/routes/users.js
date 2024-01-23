var express = require('express');
var router = express.Router();
const {ingreso, register, edit} = require('../controllers/usersControllers');

/* GET home page. */
router.get('/login', ingreso);
router.get('/registro', register);

router.get('/editar/:id', edit);

module.exports = router;
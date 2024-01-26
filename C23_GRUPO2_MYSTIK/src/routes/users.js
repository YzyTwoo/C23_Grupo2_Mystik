var express = require('express');
var router = express.Router();
const {ingreso, register, iniciarSession,logout} = require('../controllers/usersControllers')
const validationLogin = require('../middlewares/validacionLogin')



/* GET home page. */
router.get('/login', ingreso);
router.post('/login', validationLogin, iniciarSession)
router.get('/registro', register);
router.get('/logout', logout);
module.exports = router;
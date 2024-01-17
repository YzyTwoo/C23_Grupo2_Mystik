var express = require('express');
var router = express.Router();
const registerValidator = require('../validations/registerValidator')
const usersControllers = require('../controllers/usersControllers')

/* GET home page. */
router.get('/login', usersControllers.ingreso);
router.get('/registro', usersControllers.register);
router.post('/registro',registerValidator ,usersControllers.createUsers);

module.exports = router;
var express = require('express');
var router = express.Router();
const usersControllers = require('../controllers/usersControllers')

/* GET home page. */
router.get('/login', usersControllers.ingreso);
router.get('/registro', usersControllers.register);
router.post('/registro', usersControllers.createUsers);

module.exports = router;
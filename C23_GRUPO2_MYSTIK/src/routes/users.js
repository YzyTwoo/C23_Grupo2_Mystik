var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require("path")
const { ingreso, register, login,logout, createUsers, perfil, perfilEditar, carrito } = require('../controllers/usersControllers');
const registerValidator = require('../validations/registerValidator');
const validationLogin = require('../validations/validacionLogin');
const profileValidator = require('../validations/profileValidator');
const sessionValidate = require('../middlewares/sessionValidate');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,(path.join(__dirname,"../","../","/public/images/users")))
    },
    filename:(req,file,cb)=>{

        cb(null,`${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});
const upload = multer({storage})


/* GET home page. */
router.get('/login', ingreso);
router.post('/login', validationLogin, login);

router.get('/registro', register);
router.post('/registro',upload.single('image'),registerValidator,createUsers);

router.get('/editar/:id', sessionValidate, perfil);
router.put('/editar/:id', upload.single('image'), profileValidator, perfilEditar);

router.get('/logout', logout);

module.exports = router;
var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require("path");
const {ingreso, iniciarSession, register, createUsers, perfil, perfilEditar, logout} = require('../controllers/usersControllers');
const registerValidator = require('../validations/registerValidator');
const validationLogin = require('../validations/validacionLogin');
const profileValidator = require('../validations/profileValidator');
const sesionValidate = require('../middlewares/sesionValidate');

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
router.post('/login', validationLogin, iniciarSession);
router.get('/registro', register);
router.post('/registro',upload.single("imagen"),registerValidator, createUsers);

/* Editar Perfil Usuario. */
router.get('/editar/:id', sesionValidate, perfil);
router.put('/editar/:id', upload.single('image'), profileValidator, perfilEditar);

router.get('/logout', logout)

module.exports = router;
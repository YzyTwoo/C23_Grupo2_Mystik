var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require("path");
const usersControllers = require('../controllers/usersControllers');
const registerValidator = require('../validations/registerValidator');
const validationLogin = require('../validations/validacionLogin');
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
router.get('/login', usersControllers.ingreso);
router.post('/login', validationLogin, usersControllers.iniciarSession);
router.get('/registro', usersControllers.register);
router.post('/registro',upload.single("imagen"),registerValidator, usersControllers.createUsers);

/* Editar Perfil Usuario. */
router.get('/editar/:id', sesionValidate, usersControllers.perfil);
router.put('/editar/:id', upload.single('image'), usersControllers.perfilEditar);

router.get('/logout', usersControllers.logout)

module.exports = router;
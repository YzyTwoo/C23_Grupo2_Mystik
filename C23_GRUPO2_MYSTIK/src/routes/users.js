var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require("path")
const {ingreso, register, iniciarSession,logout, createUsers, perfil} = require('../controllers/usersControllers')
const validationLogin = require('../middlewares/validacionLogin')



const registerValidator = require('../validations/registerValidator')

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
router.post('/login', validationLogin, iniciarSession)
router.get('/registro', register);
router.post('/registro',upload.single("imagen"),registerValidator,createUsers);

router.get('/editar/:id', perfil);

router.get('/logout', logout);

module.exports = router;
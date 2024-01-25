const multer = require('multer');
const path = require("path")
const registerValidator = require('../validations/registerValidator');
const {ingreso, register, iniciarSession, perfil} = require('../controllers/usersControllers')
const validationLogin = require('../middlewares/validacionLogin')

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
router.post('/registro',upload.single("imagen"),registerValidator,usersControllers.createUsers);

/* Editar Perfil Usuario. */
router.get('/editar/:id', perfil);

module.exports = router;
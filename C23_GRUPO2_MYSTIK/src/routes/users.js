var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require("path")
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

const usersControllers = require('../controllers/usersControllers')

/* GET home page. */
router.get('/login', usersControllers.ingreso);
router.get('/registro', usersControllers.register);
router.post('/registro',upload.single("imagen"),registerValidator,usersControllers.createUsers);

module.exports = router;
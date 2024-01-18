const {body} = require ('express-validator');
const {leerArchivo}= require('../database/dbLogica');
const users = leerArchivo('usuarios')

module.exports =[
    body('nombre').notEmpty().withMessage("Debe ingresar un nombre").bail()
    .isLength({min:3}).withMessage("El valor ingresado debe tener al menos 3 caracteres").bail(),

    body('email').notEmpty().withMessage("Debe ingresar un email").bail()
    .isEmail().withMessage('Debe ser un correo con formato valido').bail()
    .custom(value => {       
        const user = users.find(elemento => elemento.email == value);
        return user ? false : true
    }).withMessage("El usuario ya existe, utilice otro correo electronico"), 

    body('password').notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isLength({min:6 , max:12}).withMessage("La contraseña debe tener un minimo de 6 caracteres y maximo 12 caracteres")
]
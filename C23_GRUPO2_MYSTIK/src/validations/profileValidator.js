const {body} = require ('express-validator');
const {getJson}= require('../database/dbLogica');
const users = getJson('usuarios');

module.exports =[
    body('nombre').notEmpty().withMessage('Debe ingresar un nombre').bail()
    .isLength({min:3}).withMessage('El valor ingresado debe tener al menos 3 caracteres').bail(),

    body('email').notEmpty().withMessage('Debe ingresar un email').bail()
    .isEmail().withMessage('Debe ser un correo con formato valido').bail(),

    body('telefono').notEmpty().withMessage('Debe ingresar un telefono').bail()
    .isInt().withMessage('El valor ingresado debe ser un número').bail()
    .isLength({min:5, max:21}).withMessage('El valor ingresado debe tener al menos 8 caracteres y maximo 12').bail(),

    body('password').notEmpty().withMessage('Debe ingresar una contraseña').bail()
    .isLength({min:6 , max:12}).withMessage('La contraseña debe tener un minimo de 6 caracteres y maximo 12 caracteres')
]
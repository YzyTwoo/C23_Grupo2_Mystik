const {body} = require ('express-validator');
// const {getJson}= require('../database/dbLogica');
// const users = getJson('usuarios');
// const db = require('../database/models')


module.exports =[
    body('nombre').notEmpty().withMessage('Debe ingresar un nombre').bail()
    .isLength({min:3}).withMessage('El valor ingresado debe tener al menos 3 caracteres').bail(),

    body('email').notEmpty().withMessage('Debe ingresar un email').bail()
    .isEmail().withMessage('Debe ser un correo con formato valido').bail(),

    body('telefono').notEmpty().withMessage('Debe ingresar un telefono').bail()
    .isInt().withMessage('El valor ingresado debe ser un número').bail()
    .isLength({min:6, max:21}).withMessage('El valor ingresado debe tener al menos 6 y maximo 21 caracteres').bail(),

    body('contrasenia').isLength({max:30}).withMessage('La contraseña debe tener maximo 30 caracteres')
] 
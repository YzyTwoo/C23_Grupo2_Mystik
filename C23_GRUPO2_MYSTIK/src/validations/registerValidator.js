const {body} = require ('express-validator');
const {leerArchivo}= require('../database/dbLogica');
const users = leerArchivo('usuarios')

module.exports =[
    body('name').notEmpty().withMessage("Debe ingresar un nombre").bail()
    .isLength({min:3}).withMessage("El valor ingresado debe tener al menos 3 caracteres").bail(),
    body('email').notEmpty().withMessage("Debe ingresar un email").bail()
    .isLength({min:3}).withMessage("El valor ingresado debe tener al menos 3 caracteres").bail(),
]
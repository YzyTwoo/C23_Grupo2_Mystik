const {body} = require('express-validator');

let validationLogin = [
    body('email').notEmpty().withMessage('Este campo es obligatorio').bail()
    .trim().isEmail().withMessage('Ingrese un email válido'),
    body('password').trim().notEmpty().withMessage('Este campo es obligatorio').bail()
]

module.exports = validationLogin
const {body} = require('express-validator');
const {leerArchivo} = require('../database/dbLogica')
const bcrypt = require('bcryptjs')
const users = leerArchivo('usuarios');

module.exports = validationLogin = [
    body('email').notEmpty().withMessage('Este campo es obligatorio').bail()
    .trim().isEmail().withMessage('Ingrese un email válido').bail()
    .custom(value => {
        const user = users.find(elemento => elemento.email == value);
        return user ? true : false
    }).withMessage("Credenciales inválidas"),
    body('password').trim().notEmpty().withMessage('Este campo es obligatorio').bail()
    .custom((value, {req}) => {
        const user = users.find(elementos => elementos.email = req.body.email)
        return bcrypt.compareSync(value, user.contraseña)
    }).withMessage('La constraseña es incorrecta')
]
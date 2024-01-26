// MIDDLEWARE A NIVEL DE APLICACIÓN!

const { getJson } = require('../database/dbLogica');

const sessionValidate = (req, res, next) => {
    console.log('Estas son las cookies: ', req.cookies);
    if(req.cookies.rememberMe && req.cookies.userEmail){
        const users = getJson('usuarios');
        const user = users.find(elemento => elemento.email == req.cookies.userEmail);
        req.session.user = user
        }
        next();
}

module.exports = sessionValidate 
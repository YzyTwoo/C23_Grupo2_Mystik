// MIDDLEWARE A NIVEL DE APLICACIÓN!

//const { getJson} = require('../database/dbLogica');

/*const sessionValidate = (req, res, next) => {
    console.log('Estas son las cookies: ', req.cookies);
    if(req.cookies.rememberMe && req.cookies.userEmail){
        const users = getJson('usuarios');
        const user = users.find(elemento => elemento.email == req.cookies.userEmail);
        req.session.user = user
        }
        next();
}

module.exports = sessionValidate */

const cookieValidate = (req,res,next) =>{
    if (req.cookies.rememberMe && req.cookies.user){
            req.session.user = req.cookies.user;
        }
        next();
    }

module.exports = cookieValidate;
const {validationResult} = require('express-validator'); 
const { leerArchivo, cargarArchivo } = require('../database/dbLogica');

const usersControllers = {
    ingreso: (req,res) => {
        res.render("users/login", {title: "Inicio Sesión"});
    },
    register: (req,res) => {
        res.render("users/registro", {title: "Crear Cuenta"});
    },
    registrarUsuario: (req,res) => {
        const users = leerArchivo('usuarios');
        const user = req.body;
        const id = Date.now();
        user.id = id;
        users.push(user);
        cargarArchivo(users, "usuarios");
        res.redirect('/users/login')
    },
    iniciarSession:(req, res, next)=>{
        const {email} = req.body
        if(req.cookies.rememberMe && req.cookies.userEmail){
        const users = leerArchivo('usuarios');
        const user = users.find(elemento => elemento.email == req.cookies.userEmail);
        console.log('user', user);
        }
        const users = leerArchivo('usuarios');
        const user = users.find(usuario => usuario.email == email);
        if(user){
            req.session.user = user;
            res.cookie('userEmail', user.email, {maxAge: 1000 * 60 * 15})
            res.cookie('rememberMe', "true", {maxAge: 1000 * 60 * 15})
            res.redirect('/');
        }else{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
            res.render('users/login', {errors: errors.mapped(), old: req.body}) 
            }
        }
        
    }
}

module.exports = usersControllers;
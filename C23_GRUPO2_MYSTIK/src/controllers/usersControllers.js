const fs = require('fs');
const {leerArchivo, setJson, cargarArchivo, getJson}= require('../database/dbLogica');
const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcryptjs');
const {validationResult}= require('express-validator')

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
        const users = getJson('usuarios');
        const user = users.find(elemento => elemento.email == req.cookies.userEmail);
        console.log('user', user);
        }
        const users = getJson('usuarios');
        const user = users.find(usuario => usuario.email == email);
        if(user){
            req.session.user = user;
            res.cookie('user',user,{maxAge: 1000 * 60 * 15 });

    if(req.body.remember == "true") {
      res.cookie('rememberMe',"true", {maxAge: 1000 * 60 * 15 });
    }

    res.redirect('/');
    
        }else{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
            res.render('users/login', {errors: errors.mapped(), old: req.body}) 
            }
        }
    },
    
   
    logout:(req,res)=>{
        req.session.destroy();
        if (req.cookies.user) {
          res.clearCookie('userEmail');
          res.clearCookie('rememberMe');
          res.clearCookie('user');
        }
        res.redirect('/');
      },
    createUsers: (req,res)=>{
        const errors = validationResult(req)
       
        if (errors.isEmpty()) {
            const users = leerArchivo("usuarios");
            const {nombre,email,telefono,password, rol} = req.body;
            const id = uuidv4();
            const file = req.file;
            const user ={
                nombre: nombre.trim(),
                email: email.trim(),
                telefono,
                imagen: file ? file.filename : "default.png",
                password: bcrypt.hashSync(password,10),
                id,
                rol: rol ? rol : "user"
            }
            users.push(user);
            cargarArchivo(users,"usuarios");
            return res.redirect("/users/login")
           
        }else{
            return res.render('users/registro',{old:req.body, errors:errors.mapped()})
        }
        
    },
    perfil: (req,res)=>{
        const {id} = req.params;
        const users = getJson("usuarios");
        const user = users.find(elemento => elemento.id == id);
        res.render('users/actualizarPerfil', { title: 'Editar Perfil', user });
    },
}

module.exports = usersControllers;
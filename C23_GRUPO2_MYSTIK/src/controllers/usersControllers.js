const fs = require('fs');
const {leerArchivo, getJson, cargarArchivo, uploadUser}= require('../database/dbLogica');
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
    createUsers: (req,res)=>{
        const errors = validationResult(req)
       
        if (errors.isEmpty()) {
            const users = leerArchivo("usuarios");
            const {nombre,email,telefono,password,rol} = req.body;
            const id = uuidv4();
            const file = req.file;
            const user ={
                id,
                nombre: nombre.trim(),
                email: email.trim(),
                telefono,
                image: file ? file.filename : "default.png",
                password: bcrypt.hashSync(password,10),
                rol: rol ? rol : "user"
            }
            users.push(user);
            cargarArchivo(users,"usuarios");
            return res.redirect("/users/login")
           
        }else{
            return res.render('users/registro',{old:req.body, errors:errors.mapped()})
        }
        
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
    },
    perfil:(req,res)=>{
        const {id} = req.params;
        const users = getJson('usuarios');
        const user = users.find(elemento => elemento.id == id);
        res.render('users/actualizarPerfil', { title: 'Editar Perfil', user, user:req.session.user});
      },
    perfilEditar: (req,res)=>{
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            const { id } = req.params;
            const users = getJson('usuarios');
            const user = users.find(elemento => elemento.id == id);
            return res.render("users/actualizarPerfil", { title: 'Editar Perfil', user, user:req.session.user, errors:errors.mapped(), old:req.body});
        } else {
            const {id} = req.params;
            const {nombre, email, telefono, rol} = req.body;
            const users = getJson('usuarios');
            const usuarios = users.map(element => {
                if (element.id == id) {
                    return {
                        id: +id,
                        nombre: nombre.trim(),
                        email: email.trim(),
                        telefono,
                        image: req.file ? req.file.filename : element.image,
                        password: element.password,
                        rol: rol ? rol : "user"
                    };
                }
                return element;
            });
            
            uploadUser(usuarios, "usuarios");
            const userUpdate = usuarios.find(elemento => elemento.id == id);
            req.session.user = userUpdate;
            delete userUpdate.password;
            res.cookie('user', userUpdate);
            res.redirect(`/`);
        }
    },
    dashboard:(req,res)=>{
        res.send(req.session.user)
    },
        logout:(req,res) =>{
        req.session.destroy();
        if (req.cookies) {
        res.clearCookie('user');
        res.clearCookie("userEmail")
        res.clearCookie('rememberMe');
        }
        res.redirect('/');
}
}

module.exports = usersControllers;
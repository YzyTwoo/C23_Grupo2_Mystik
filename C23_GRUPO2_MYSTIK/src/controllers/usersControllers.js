const fs = require('fs');
const {leerArchivo, setJson, cargarArchivo, getJson, uploadUser}= require('../database/dbLogica');
const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcryptjs');
const {validationResult}= require('express-validator')
const db = require('../database/models')


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
    iniciarSession:(req, res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            console.log(errors)
        res.render('users/login', {errors: errors.mapped(), old: req.body}) 
        }
        else{

        const {email} = req.body
        const users = getJson('usuarios');
        const user = users.find(elemento => elemento.email == email);
        
        req.session.user = user;

        res.cookie("user",user,{maxAge:1000 * 60 *15})

        if(req.body.remember == "true"){
            res.cookie("rememberMe","true",{maxAge: 1000*60*15});
        }
        res.redirect("/");
    }
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
                image: file ? file.filename : "default.png",
                password: bcrypt.hashSync(password,10),
                id,
                rol: rol ? rol : "user"
            }
            users.push(user);
            uploadUser(users,"usuarios");
            return res.redirect("/users/login")
        }else{
            return res.render('users/registro',{old:req.body, errors:errors.mapped()})
        }
    },
    perfil:(req,res)=>{
        const {id} = req.params;
        const users = getJson('usuarios');
        const user = users.find(elemento => elemento.id == id);
        res.render('users/actualizarPerfil', { title: 'Editar Perfil', user, usuario:req.session.user});
    },
    perfilEditar: (req,res)=>{
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            const { id } = req.params;
            const users = getJson('usuarios');
            const user = users.find(elemento => elemento.id == id);
            return res.render('users/actualizarPerfil', { title: 'Editar Perfil', user, usuario:req.session.user, errors:errors.mapped(), old:req.body});
        } else {
            const {id} = req.params;
            const {nombre, email, telefono, rol} = req.body;
            const users = getJson('usuarios');
            const usuarios = users.map(element => {
                if (element.id == id) {
                    return {
                        nombre: nombre.trim(),
                        email: email.trim(),
                        telefono,
                        image: req.file ? req.file.filename : element.image,
                        password: element.password,
                        id,
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
    logout:(req,res)=>{
        req.session.destroy();
        if (req.cookies.user) {
        res.clearCookie('userEmail');
        res.clearCookie('rememberMe');
        res.clearCookie('user');
        }
        res.redirect('/');
    },
    dashboard:(req,res)=>{
        res.send(req.session.user)
},
allUsers: (req, res) => {
    db.Usuario.findAll()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Error al buscar usuarios');
        });
}
}

module.exports = usersControllers;
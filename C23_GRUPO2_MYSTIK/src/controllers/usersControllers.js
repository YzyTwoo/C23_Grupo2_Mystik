const {leerArchivo, setJson, cargarArchivo }= require('../database/dbLogica');
const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcryptjs');
const {validationResult}= require('express-validator')
const fs = require('fs');
const {getJson, setJson}= require('../database/dbLogica');

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
            const {nombre,email,telefono,password} = req.body;
            const id = uuidv4();
            const file = req.file;
            const user ={
                nombre: nombre.trim(),
                email: email.trim(),
                telefono,
                imagen: file ? file.filename : "default.png",
                password: bcrypt.hashSync(password,10),
                id
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
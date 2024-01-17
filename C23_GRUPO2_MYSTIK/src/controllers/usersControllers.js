const {leerArchivo, setJson, cargarArchivo }= require('../database/dbLogica');
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
        const users = leerArchivo("usuarios");
        const {nombre,email,telefono,contraseña} = req.body;
        const id = uuidv4();

        if (errors.isEmpty()) {
            const user ={
                nombre: nombre.trim(),
                email: email.trim(),
                telefono,
                password: bcrypt.hashSync(contraseña,10),
                id
            }
            users.push(user);
            cargarArchivo(users,"usuarios");
            return res.redirect("/users/login")
        }else{
            return res.render('users/registro',{old:req.body, errors:errors.mapped()})
        }
        
    }
}

module.exports = usersControllers;
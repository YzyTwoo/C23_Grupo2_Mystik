const {leerArchivo, setJson, cargarArchivo }= require('../database/dbLogica');
const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcryptjs');

const usersControllers = {
    ingreso: (req,res) => {
        res.render("users/login", {title: "Inicio Sesión"});
    },
    register: (req,res) => {
        res.render("users/registro", {title: "Crear Cuenta"});
    },
    createUsers: (req,res)=>{
        const users = leerArchivo("usuarios");
        const {nombre,email,telefono,contraseña} = req.body;
        const id = uuidv4();
        const file = req.file;
        const user ={
            nombre: nombre.trim(),
            email: email.trim(),
            telefono,
            password: bcrypt.hashSync(contraseña,10),
            imagen: file ? file.filename : "default.jpg",
            id
        }
        users.push(user);
        cargarArchivo(users,"usuarios");
        res.redirect("/users/login")
    }
}

module.exports = usersControllers;
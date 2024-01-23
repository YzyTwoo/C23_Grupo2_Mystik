const fs = require('fs');
const {getJson, setJson}= require('../database/dbLogica');

const usersControllers = {
    ingreso: (req,res) => {
        res.render("users/login", {title: "Inicio Sesión"});
    },
    register: (req,res) => {
        res.render("users/registro", {title: "Crear Cuenta"});
    },
    perfil: (req,res)=>{
        const {id} = req.params;
        const users = getJson("usuarios");
        const user = users.find(elemento => elemento.id == id);
        res.render('users/actualizarPerfil', { title: 'Editar Perfil', user });
    },
}

module.exports = usersControllers;
const express = ('express');
const fs = require('fs');
const {leerArchivo, setJson, cargarArchivo }= require('../database/dbLogica')


const usersControllers = {
    ingreso: (req,res) => {
        res.render("users/login", {title: "Inicio Sesión"});
    },
    register: (req,res) => {
        res.render("users/registro", {title: "Crear Cuenta"});
    },
}

module.exports = usersControllers;
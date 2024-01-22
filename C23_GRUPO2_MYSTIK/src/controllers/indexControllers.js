const path = require('path');
const leerArchivo = require('../database/dbLogica.js')

const indexControllers = {
    index: (req, res) => {
        let productos = leerArchivo.leerArchivo('productos')
        res.render('index', {title: "Mystik", productos, usuario:req.session.user})
    },
}

module.exports = indexControllers;
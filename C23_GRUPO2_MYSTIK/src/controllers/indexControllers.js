const path = require('path');
const {leerArchivo} = require('../database/dbLogica.js')
const db = require('../database/models')

const indexControllers = {
    index: (req, res) => {
        db.Producto.findAll()
        .then(function(productos){
        res.render('index', {title: "Mystik", productos, usuario:req.session.user})
        })
        .catch(err => console.log(err))
}
}
module.exports = indexControllers;
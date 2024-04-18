const path = require('path');
const {leerArchivo} = require('../database/dbLogica.js')
const db = require('../database/models')

const indexControllers = {
    index: (req, res) => {
        db.Producto.findAll({
            include: [{
                model: db.Imagen,
                as: 'imagenes'
            }]
        })
        .then(function(productos){
            const imagenes = [];
            productos.forEach(producto => {
                producto.imagenes.forEach(imagen => {
                    imagenes.push(imagen.file);
                });
            });
            res.render('index', { 
                title: 'Inicio', 
                productos, 
                imagenes,
                usuario: req.session.user 
            });
        })
        .catch(err => console.log(err));
    }
}
module.exports = indexControllers;
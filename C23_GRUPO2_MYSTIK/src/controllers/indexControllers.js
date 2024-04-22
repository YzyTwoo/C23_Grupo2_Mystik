const path = require('path');
const {leerArchivo} = require('../database/dbLogica.js')
const db = require('../database/models')

const indexControllers = {
    index: (req, res) => {
        const pagina = req.query.pagina || 1;
        const porPagina = 12;
        const offset = (pagina - 1) * porPagina;

        db.Producto.findAndCountAll({
            include: [{
                model: db.Imagen,
                as: 'imagenes'
            }],
            limit: porPagina,
            offset: offset
        })
        .then(function(result){
            const productos = result.rows;
            const totalProductos = result.count;
            const totalPaginas = Math.ceil(totalProductos / porPagina);

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
                usuario: req.session.user,
                pagina,
                totalPaginas
            });
        })
        .catch(err => console.log(err));
    },

    informacion:(req,res)=>{
        res.render("informacion",{
            title:"Informacion",
            usuario: req.session.user
        })
       },

       tienda:(req,res)=>{
        res.render("tienda",{
            title:"Tienda",
            usuario: req.session.user})
       }   
}

module.exports = indexControllers;

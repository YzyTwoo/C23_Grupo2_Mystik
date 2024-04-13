const path = require("path");
const {leerArchivo, setJson, cargarArchivo }= require('../database/dbLogica');
const fs = require('fs');
const {validationResult} = require('express-validator');
const db = require('../database/models');


const productosControllers = {
    viewProducts: (req, res) => {
        db.Producto.findAll()
        .then(function(productos){
            res.render('products/productosView', {title:'productos', productos})
        })
        .catch(err => console.log(err))
    },

    detalleProducts: (req, res) => {
        db.Producto.findByPk(req.params.id, {
            include: [{
                model: db.Imagen,
                as: 'imagenes'
            }]
        })
        .then(function(producto){
            const imagenes = producto.imagenes.map(imagen => imagen.file);
            res.render('products/detalleProducts', { 
                title: 'Detalles', 
                producto, 
                imagenes,
                usuario: req.session.user 
            });
        })
        .catch(err => console.log(err));
    },

    carritoProducts: (req, res) => {
        let productos = leerArchivo('productos');
        res.render('products/carritoProducts', {title:'Carrito', productos, usuario:req.session.user });
    },

    cargaProducto:  (req, res) => {
        let productos = leerArchivo('productos');
        res.render('products/cargaProducto', {productos, usuario:req.session.user});
    },

    formEditarProducto: (req, res) => {
        db.Producto.findByPk(req.params.id)
            .then(result => {
                if (!result) {
                    return res.status(404).send('no se encontro el producto');
                }
                res.render('products/editProduct', { title: 'Editar Producto', result: result, usuario: req.session.user, errors:{}});
            })
            .catch(err => {
                console.log('error', err);
            });
    },

    editarProducto: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('products/editProduct', { title: 'Editar Producto', result: req.body, usuario: req.session.user, errors: errors.mapped()});
        } else {
            const { nombre, precio, descripcion, talles_id, stock, categorias_id, colecciones_id, colores_id } = req.body;
            db.Producto.update(
                {
                    nombre,
                    precio,
                    descripcion,
                    talles_id,
                    stock,
                    categorias_id,
                    colecciones_id,
                    colores_id
                },
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
            .then(() => {
                req.session.usuario = req.session.user;
                res.redirect('/productos/dashboard');
            })
            .catch(err => {
                console.log('error', err);
            });
        }
    },

    dashboard:(req, res) => {
        db.Producto.findAll()
            .then(productos => {
                const propiedades = ['id', 'nombre', 'precio', 'descripcion', 'stock', 'categorias_id', 'colecciones_id', 'colores_id', 'talles_id'];
                res.render('products/dashboard', { title: "Dashboard", productos, propiedades, usuario:req.session.user });
            }).catch(err => { 
                console.log(err)
            });
    },

    vistacrear: (req,res)=>{
		res.render('products/create', { title: "create", usuario:req.session.user});
	},

    create: (req, res) => {
        const errors = validationResult(req);
    
        if (errors.isEmpty()) {
            const { nombre, precio, descripcion, talles_id, stock, imagen_id, categorias_id, colores_id, colecciones_id } = req.body;
            const product = {
                imagen_id,
                nombre: nombre.trim(),
                precio: precio.trim(),
                descripcion,
                talles_id,
                stock,
                categorias_id,
                colores_id,
                colecciones_id
            };
            db.Producto.create(product)
                .then(user => {
                    res.redirect('/productos/dashboard');
                })
                .catch(err => {
                    res.status(500).send('Error interno del servidor');
                });
        } else {
            return res.render('products/create', { old: req.body, errors: errors.mapped() });
        }
    },
    destroy : (req, res) => {
        id = req.params.id
        db.Producto.destroy({
        where: {id : id}
    }).then(result => {
        if(result){
            req.session.usuario = req.session.user;
            res.redirect('/productos/dashboard');
        }
    }).catch(err => console.log(err))
},
}

module.exports = productosControllers;
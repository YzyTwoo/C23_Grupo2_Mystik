const path = require("path");
const {leerArchivo, setJson, cargarArchivo }= require('../database/dbLogica')
const fs = require('fs');

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
        db.Producto.findByPk(req.params.id)
        .then(function(productos){
            res.render('products/detalleProducts', { title: 'Detalles', productos, usuario:req.session.user })
        })
        .catch(err => console.log(err))
    },

    carritoProducts: (req, res) => {
        let productos = leerArchivo('productos');
        res.render('products/carritoProducts', {title:'Carrito', productos, usuario:req.session.user });
    },

    cargaProducto:  (req, res) => {
        let productos = leerArchivo('productos');
        res.render('products/cargaProducto', {productos, usuario:req.session.user});
    },

    formEditarProducto:  (req, res) => {
        db.Producto.findByPk(req.params.id)
        .then(function(result) {
            if (result) {
                req.session.usuario = req.session.user
                res.render('products/editProduct', {title: result.nombre, result: result});
            }
        });
    },

    editarProducto: (req, res) => {
        const id = req.params.id;
        const { nombre, precio, descripcion, stock, talles_id, colecciones_id, categorias_id, colores_id } = req.body;
        const file = req.file;
    
        db.Producto.update(
            {
                nombre,
                precio,
                descripcion,
                stock,
                talles_id,
                colecciones_id,
                categorias_id,
                colores_id
            },
            {
                where: {
                    id: id
                }
            }
            )
            .then(() => {
                req.session.usuario = req.session.user;
                res.redirect('/productos/dashboard');
            })
            .catch((error) => {
                console.error(error);
            });
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

    create: (req,res)=>{

    console.log(req.body);
        const file = req.file;
            db.Producto.create({
                imagen_id : file?file.filename:"default.png",
                nombre: req.body.nombre,
                precio: req.body.precio,
                descripcion: req.body.descripcion,
                talles_id:req.body.talles_id,
                stock:req.body.stock,
                categorias_id:req.body.categorias_id,
                colores_id:req.body.colores_id, 
        }).then(()=>{res.redirect(`/productos/dashboard`)})
        .catch(error => console.log(error))
        


    /*  db.Producto.create({
            
			nombre: req.body.nombre,
			precio: req.body.precio,
		    descripcion: req.body.descripcion,
            talles_id:req.body.talles_id,
            /* colecciones_id:req.body.colecciones_id,
            stock:req.body.stock,
            stock:req.body.stock,
            stock:req.body.stock, */

        
        /*  let productos = leerArchivo('productos');
        const {image, name, price, description, talle, category, color, stock} = req.body;
        const id =  productos[productos.length-1].id + 1;
        const file = req.file;
        const productoNuevo = {
			id: +id,
            image: file?file.filename:"default.png",
			name,
			price,
			description,
            talle,
            category,
            color,
            stock,
			
		};
        productos.push(productoNuevo);
        const Json = JSON.stringify(productos);
        fs.writeFileSync(path.join(__dirname,"../database/productos.json"), Json, 'utf-8' );
        res.redirect(`/productos/dashboard`,{usuario:req.session.usuario});   */
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
const path = require("path");
const {leerArchivo, setJson, cargarArchivo }= require('../database/dbLogica')
const fs = require('fs');

const db = require('../database/models');

const productosControllers = {
    viewProducts: (req, res) => {
        let productos = leerArchivo('productos');
        res.render('products/productosView', {title:'productos', productos})
    },

    detalleProducts: (req, res) => {
        let productos = setJson();
        let { id } = req.params;
        let product = productos.find(productos => productos.id == id);
        productos.splice(product.id - 1, 1)
        res.render('products/detalleProducts', { title: 'Detalles', productos, product, usuario:req.session.user }); 
    },

    carritoProducts: (req, res) => {
        let productos = leerArchivo('productos');
        res.render('products/carritoProducts', {title:'Carrito', productos, usuario:req.session.usuario });
    },

    cargaProducto:  (req, res) => {
        let productos = leerArchivo('productos');
        res.render('products/cargaProducto', {productos, usuario:req.session.usuario});
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
		res.render('products/create', { title: "create", usuario:req.session.usuario});
	},

    create: (req,res)=>{
        let productos = leerArchivo('productos');
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
        res.redirect(/productos/dashboard,{usuario:req.session.usuario});  
    },

    destroy : (req, res) => {
    const {id} = req.params;
    let productos = leerArchivo('productos');
    /* const cargarArchivo = cargarArchivo() */
    
    const nuevaLista = productos.filter(producto => producto.id !== +id);
    cargarArchivo(nuevaLista, 'productos')
   
    res.redirect(/productos/dashboard,{usuario:req.session.usuario});
    },

/* destroy : (req, res) => {
    const {id} = req.params;
    const archivoJson = leerArchivo('productsDataBase')

    const productosNoEliminados = archivoJson.filter(product => product.id !== +id)

    cargarArchivo(productosNoEliminados, 'productsDataBase')

    res.redirect('/')
} */
}

module.exports = productosControllers;
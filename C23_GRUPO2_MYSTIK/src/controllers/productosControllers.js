const path = require("path");
const {leerArchivo, setJson, cargarArchivo }= require('../database/dbLogica')
const fs = require('fs');
const db = require('../database/models')


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
        let productos = leerArchivo('productos');
        const {id} = req.params;
        const product = productos.find(producto => producto.id == id);
        res.render('products/editProduct', {title: product.name, product, usuario:req.session.user});
        // res.send(product)
    },
    editarProducto:  (req, res) => {
        let productos = leerArchivo('productos');
        const {id} = req.params;
        const {image, name, price, description, talle, category,color,stock} = req.body
        const file = req.file;
        const nuevoArray = productos.map(product => {
            if (product.id == id){
                return{
                    id:+id,
                    name:name.trim(),
                    image: file ? file.filename : "default.png",
                    price:price.trim(),
                    description:description.trim(),
                    talle,
                    category,
                    color,
                    stock
                }
            }
            return product
        })
        const json =JSON.stringify(nuevoArray);
        fs.writeFileSync(path.join(__dirname,"../database/productos.json"), json, "utf-8")
        res.redirect('/productos/dashboard', {usuario:req.session.user})
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
        res.redirect(`/productos/dashboard`,{usuario:req.session.user});  
},
    destroy : (req, res) => {
        id = req.params.id
        db.Producto.destroy({
        where: {id : id}
    }).then(result => {
        if(result){
            res.redirect(`/productos/dashboard`,{usuario:req.session.user})
        }else{
            res.send("se a producido un error"
            )}
    }).catch(err => console.log(err))
},
}

module.exports = productosControllers;
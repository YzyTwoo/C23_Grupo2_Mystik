const { log } = require("console");
const fs = require("fs");
const path = require("path");
const json = fs.readFileSync(path.join(__dirname,"../database/productos.json"),'utf-8')
const productos = JSON.parse(json);


const productosControllers = {

    detalleProducts: (req, res) => {
        res.render('products/detalleProducts', { title:'Detalles', productos });
    },
    

    carritoProducts: (req, res) => {
        res.render('products/carritoProducts', {title:'Carrito', productos });
    },

    cargaProducto:  (req, res) => {
        res.render('products/cargaProducto');
    },

    editarProducto:  (req, res) => {
        res.render('products/editProduct', {title:'Edición'});
    },

    dashboard:(req, res) => {
        const propiedades = []
        for (prop in productos[0]) {
            propiedades.push(prop)
        }
        res.render('products/dashboard', { title: "Dashboard", productos, propiedades });
    },

    vistacrear: (req,res)=>{
		res.render('products/create', { title: "create"});
	},

    create: (req,res)=>{
        const producto = req.body;
        producto.id =  productos[productos.length-1].id + 1;
        productos.push(producto);
        const Json = JSON.stringify(productos);
        fs.writeFileSync(path.join(__dirname,"../database/productos.json"), Json, 'utf-8' );
        res.redirect("/productos/dashboard");


       
},
}

module.exports = productosControllers;
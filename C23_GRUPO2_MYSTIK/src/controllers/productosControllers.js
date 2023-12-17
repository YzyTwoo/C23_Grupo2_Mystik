const fs = require("fs");
const path = require("path");
const json = fs.readFileSync(path.join(__dirname,"../database/productos.json"),"utf-8")
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
    }

}

module.exports = productosControllers;
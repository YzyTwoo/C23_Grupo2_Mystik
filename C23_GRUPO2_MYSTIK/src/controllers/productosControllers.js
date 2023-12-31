const path = require("path");
const leerArchivo = require('../database/dbLogica')


const productosControllers = {
    viewProducts: (req, res) => {
        let productos = leerArchivo('productos');
        res.render('products/productosView', {title:'productos', productos})
    },
    detalleProducts: (req, res) => {
        let productos = leerArchivo('productos');
        res.render('products/detalleProducts', { title:'Detalles', productos });
    },
    carritoProducts: (req, res) => {
        let productos = leerArchivo('productos');
        res.render('products/carritoProducts', {title:'Carrito', productos });
    },
    cargaProducto:  (req, res) => {
        let productos = leerArchivo('productos');
        res.render('products/cargaProducto');
    },
    editarProducto:  (req, res) => {
        let productos = leerArchivo('productos');
        res.render('products/editProduct', {title:'Edición'});
    },
    dashboard:(req, res) => {
        let productos = leerArchivo('productos');
        const propiedades = []
        for (prop in productos[0]) {
            propiedades.push(prop)
        }
        res.render('products/dashboard', { title: "Dashboard", productos, propiedades });
    },
    
    destroy : (req, res) => {
        let productos = leerArchivo('productos');
		const {id} = req.params;
		const nuevaLista = productos.filter(productos => productos.id != id);
		const json = JSON.stringify(nuevaLista);
		fs.writeFileSync(productsFilePath,json,"utf-8");
		res.redirect('products/productosView');
	}

}

module.exports = productosControllers;
const path = require("path");
const {leerArchivo, setJson }= require('../database/dbLogica')


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
        res.render('products/detalleProducts', { title: 'Detalles', productos, product }); 
    },
    

    carritoProducts: (req, res) => {
        let productos = leerArchivo('productos');
        res.render('products/carritoProducts', {title:'Carrito', productos });
    },

    cargaProducto:  (req, res) => {
        let productos = leerArchivo('productos');
        res.render('products/cargaProducto', productos);
    },

    editarProducto:  (req, res) => {
        let productos = leerArchivo('productos');
        res.render('products/editProduct', {title:'Edición', productos});
    },

    dashboard:(req, res) => {
        let productos = leerArchivo('productos');
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
        const {image, name, price, description, talle, category, color, stock} = req.body;
        const id =  productos[productos.length-1].id + 1;
        const productoNuevo = {
			id: +id,
            image,
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
        res.redirect(`/productos/detallePoducts/${productoNuevo.id}`,);  
},
destroy : (req, res) => {
    let productos = leerArchivo('productos');
    const {id} = req.params;
    const nuevaLista = productos.filter(productos => productos.id != id);
    const json = JSON.stringify(nuevaLista);
    fs.writeFileSync(productsFilePath,json,"utf-8");
    res.redirect('/');
}
}

module.exports = productosControllers;
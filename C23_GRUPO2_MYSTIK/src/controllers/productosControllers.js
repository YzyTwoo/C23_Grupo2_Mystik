const path = require("path");
const {leerArchivo, setJson, cargarArchivo }= require('../database/dbLogica')
const fs = require('fs');



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
    formEditarProducto:  (req, res) => {
        let productos = leerArchivo('productos');
        const {id} = req.params;
        const product = productos.find(producto => producto.id == id);
        res.render('products/editProduct', {title: product.name, product});
        // res.send(product)
    },
    editarProducto:  (req, res) => {
        let productos = leerArchivo('productos');
        const {id} = req.params;
        const {image, name, price, description, talle, category,color,stock} = req.body
        const nuevoArray = productos.map(product => {
            if (product.id == id){
                return{
                    id:+id,
                    name:name.trim(),
                    image: image ? image : product.image,
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
        res.redirect('/productos/dashboard')
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
        res.redirect(`/productos/dashboard`,);  
},
    destroy : (req, res) => {
    const {id} = req.params;
    let productos = leerArchivo('productos');
    /* const cargarArchivo = cargarArchivo() */
    
    const nuevaLista = productos.filter(producto => producto.id !== +id);
    cargarArchivo(nuevaLista, 'productos')
   
    res.redirect(`/productos/dashboard`);
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
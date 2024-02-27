const path = require("path");
const {leerArchivo, setJson, cargarArchivo }= require('../database/dbLogica')
const fs = require('fs');

 const db = require("../database/models")



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
        let productos = leerArchivo('productos');
        const {id} = req.params;
        const product = productos.find(producto => producto.id == id);
        res.render('products/editProduct', {title: product.name, product, usuario:req.session.usuario});
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
        res.redirect('/productos/dashboard', {usuario:req.session.usuario})
    },

    dashboard:(req, res) => {
        
        let productos = leerArchivo('productos');
        const propiedades = []
        for (prop in productos[0]) {
            propiedades.push(prop)
        }
        res.render('products/dashboard', { title: "Dashboard", productos, propiedades, usuario:req.session.user });
    },

    vistacrear: (req,res)=>{
		res.render('products/create', { title: "create", usuario:req.session.usuario});
	},

    create: (req,res)=>{

    console.log(req.body);

        db.Producto.create({
            image: req.body.image,
			name: req.body.name,
			price: req.body.price,
			description: req.body.description,
            talle: req.body.talle,
            category: req.body.category,
            color:req.body.color,
            stock:req.body.stock,
    }).then(()=>{res.redirect(`/productos/dashboard`)})
    

        
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
    const {id} = req.params;
    let productos = leerArchivo('productos');
    /* const cargarArchivo = cargarArchivo() */
    
    const nuevaLista = productos.filter(producto => producto.id !== +id);
    cargarArchivo(nuevaLista, 'productos')
   
    res.redirect(`/productos/dashboard`,{usuario:req.session.usuario});
},


}

module.exports = productosControllers;
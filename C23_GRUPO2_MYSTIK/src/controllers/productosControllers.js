const path = require("path");
const {leerArchivo, setJson, cargarArchivo }= require('../database/dbLogica')
const fs = require('fs');
const db = require('../database/models')


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
        
        let productos = leerArchivo('productos');
        const propiedades = []
        for (prop in productos[0]) {
            propiedades.push(prop)
        }
        res.render('products/dashboard', { title: "Dashboard", productos, propiedades, usuario:req.session.user });
    },

    vistacrear: (req,res)=>{
		res.render('products/create', { title: "create", usuario:req.session.user});
	},

    create: (req,res)=>{

    console.log(req.body);
        
        
            db.Producto.create({
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
            res.redirect(`/productos/dashboard`,{usuario:req.session.user})
        }else{
            res.send("se a producido un error"
            )}
    }).catch(err => console.log(err))
},
}

module.exports = productosControllers;
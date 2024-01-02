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
    formEditarProducto:  (req, res) => {
        const {id} = req.params;
        const product = productos.find(producto => producto.id == id);
        res.render('products/editProduct', {title: product.name, product});
        // res.send(product)
    },
    editarProducto:  (req, res) => {
        const {id} = req.params;
        const {image, name, price, description, size} = req.body
        const nuevoArray = productos.map(product => {
            if (product.id == id){
                return{
                    id,
                    name:name.trim(),
                    image: image ? image : product.image,
                    price:price.trim(),
                    description:description.trim(),
                    size
                }
            }
            return product
        })
        const json =JSON.stringify(nuevoArray);
        fs.writeFileSync(path.join(__dirname,"../database/productos.json"), json, "utf-8")
        res.redirect('/productos/dashboard')
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
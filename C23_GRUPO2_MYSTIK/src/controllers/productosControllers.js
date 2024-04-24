const path = require("path");
const fs = require("fs");
const { validationResult } = require("express-validator");
const db = require("../database/models");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productosControllers = {
  viewProducts: (req, res) => {
      db.Producto.findAll()
      .then(function(productos){
          res.render('products/productosView', {title:'productos', productos})
      })
      .catch(err => console.log(err))
  },

  detalleProducts: (req, res) => {
      db.Producto.findByPk(req.params.id, {
          include: [{
              model: db.Imagen,
              as: 'imagenes'
          }]
      })
      .then(function(producto){
          const imagenes = producto.imagenes.map(imagen => imagen.file);
          res.render('products/detalleProducts', { 
              title: 'Detalles', 
              producto, 
              imagenes,
              usuario: req.session.user 
          });
      })
      .catch(err => console.log(err));
  },

  carritoProducts: (req, res) => {
      let productos = leerArchivo('productos');
      res.render('products/carritoProducts', {title:'Carrito', productos, usuario:req.session.user });
  },

  cargaProducto:  (req, res) => {
      let productos = leerArchivo('productos');
      res.render('products/cargaProducto', {productos, usuario:req.session.user});
  },

    formEditarProducto: (req, res) => {
        db.Producto.findByPk(req.params.id, {
            include: [{
                model: db.Imagen,
                as: 'imagenes'
            }]
        })
        .then(result => {
            if (!result) {
                return res.status(404).send('error');
            }
            const imagenes = result.imagenes.map(imagen => imagen.file);
            res.render('products/editProduct', { title: 'Editar Producto', result: result, usuario: req.session.user, imagenes: imagenes, errors: {}});
        })
        .catch(err => {
            console.log('error', err);
        });
    },
    
    editarProducto: (req, res) => {
        const errors = validationResult(req);
    
        if (!errors.isEmpty()) {
            return res.render('products/editProduct', { title: 'Editar Producto', result: req.body, usuario: req.session.user, errors: errors.mapped()});
        } else {
            const { nombre, precio, descripcion, talles_id, stock, categorias_id, colecciones_id, colores_id, imagen_id} = req.body;
    
            db.Producto.update(
                {
                    nombre,
                    precio,
                    descripcion,
                    talles_id,
                    stock,
                    categorias_id,
                    colecciones_id,
                    colores_id,
                    imagen_id
                },
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
            .then(() => {
                req.session.usuario = req.session.user;
                res.redirect('/productos/dashboard');
            })
            .catch(err => {
                console.log('error', err);
            });
        }
    },

    dashboard: (req, res) => {
        const pagina = req.query.pagina || 1; 
        const porPagina = 10;
        const offset = (pagina - 1) * porPagina;
    
        db.Producto.findAll({
            attributes: [
                'id',
                'nombre',
                'imagen_id',
                'precio',
                'descripcion',
                'stock',
                'talles_id',
                'colecciones_id',
                'categorias_id',
                'colores_id',
                'createdAt',
                'updatedAt'
            ],
            include: [
                {
                    model: db.Categoria,
                    as: 'categoria',
                    attributes: ['nombre_categoria']
                },
                {
                    model: db.Talle,
                    as: 'talle',
                    attributes: ['nombre_talle']
                },
                {
                    model: db.Coleccion,
                    as: 'coleccion',
                    attributes: ['nombre_coleccion']
                },
                {
                    model: db.Color,
                    as: 'color',
                    attributes: ['nombre_color']
                }
            ],
            limit: porPagina,
            offset: offset
        })
        .then(productos => {
            const productosMapped = productos.map(producto => ({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                descripcion: producto.descripcion,
                stock: producto.stock,
                categoria: producto.categoria ? producto.categoria.nombre_categoria : null,
                talle: producto.talle ? producto.talle.nombre_talle : null,
                coleccion: producto.coleccion ? producto.coleccion.nombre_coleccion : null,
                color: producto.color ? producto.color.nombre_color : null
            }));
            const propiedades = ['id', 'nombre', 'precio', 'descripcion', 'stock', 'categoria', 'talle', 'coleccion', 'color'];
    
            db.Producto.count()
            .then(totalProductos => {
                const totalPaginas = Math.ceil(totalProductos / porPagina);
    
                res.render('products/dashboard', {
                    title: "Dashboard",
                    productos: productosMapped,
                    propiedades,
                    usuario: req.session.user,
                    pagina,
                    totalPaginas
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).send("Error interno del servidor");
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Error interno del servidor");
        });
    },

    vistacrear: (req,res)=>{
		res.render('products/create', { title: "create", usuario:req.session.user});
	},

    create: (req, res) => {
        const errors = validationResult(req);
    
        if (errors.isEmpty()) {
            const {nombre, precio, descripcion, talles_id, stock, categorias_id, colecciones_id, colores_id, imagen_id} = req.body;
            const product = {
                nombre: nombre.trim(),
                precio: precio.trim(),
                descripcion,
                talles_id,
                stock,
                categorias_id,
                colecciones_id,
                colores_id,
                imagen_id
            };
            db.Producto.create(product)
                .then(user => {
                    res.redirect('/productos/dashboard');
                })
                .catch(err => {
                    res.status(500).send('Error interno del servidor');
                });
        } else {
            return res.render('products/create', { old: req.body, errors: errors.mapped(), usuario:req.session.user});
        }
    },
    destroy : (req, res) => {
        id = req.params.id
        db.Producto.destroy({
        where: {id : id}
    }).then(result => {
        if(result){
            req.session.usuario = req.session.user;
            res.redirect('/productos/dashboard');
        }
    }).catch(err => console.log(err))
},
colecciones: (req,res)=>{
    return res.render('products/colecciones.ejs', {title:"Colecciones", usuario: req.session.user})
},
productosColeccion:(req,res)=>{
  const nombreColeccion = req.params.nombreColeccion;
  db.Producto.findAll({
      include: [
      {
          model: db.Imagen,
          as: 'imagenes'
      },
      {
          model: db.Coleccion,
          as: 'coleccion',
          where: { nombre_coleccion: nombreColeccion},
          attributes: ['nombre_coleccion']
      },
  ]
  })
  .then(function(productos){
      const imagenes = [];
      productos.forEach(producto => {
          producto.imagenes.forEach(imagen => {
              imagenes.push(imagen.file);
          });
      });
      res.render('products/productosColeccion', { 
          productos, 
          imagenes,
          usuario: req.session.user 
      });
  })
  .catch(err => console.log(err));
},

vistaCarrito: async (req, res) => {
  const items = await db.Item.findAll({
    where: {
      usuarios_id: req.session.user.id
    },
    include: {
      association: "producto",
    }
  });
  
  const total = items.reduce(
    (accumulator, currentValue) =>
      accumulator + ( currentValue.cantidad * parseFloat(currentValue.producto.precio)),0
  );

  res.render('products/carrito', { title: "Carrito", usuario:req.session.user, items:items, total:total, toThousand})
},

agregarAlCarrito: (req, res) => {
  const idProducto = req.params.idProducto;
  const idUsuario = req.session.user.id;
  const cantidad = req.body.cantidad;

  db.Item.create({
    productos_id: idProducto,
    usuarios_id: idUsuario,
    cantidad: cantidad,
  })
    .then(() => {
      res.redirect('/productos/carrito');
    })
    .catch((error) => {
      console.error("Error al agregar producto al carrito:", error);
    });
},

destroyCarrito: (req, res) => {
  const { id } = req.params
  db.Item.destroy({
    where: { id: id },
  })
    .then((result) => {
      if (result) {
        req.session.usuario = req.session.user;
        res.redirect("/productos/carrito");
      }
    })
    .catch((err) => console.log(err));
},
editCarrito: (req, res) => {
  const { id } = req.params;
  const cantidadNueva = req.body.cantidad;

  console.log('TE TRAE ESTO:', cantidadNueva);
  console.log(req.body)
  db.Item.update(
    { cantidad: cantidadNueva },
    { where: { id: id } } 
  )
    .then(() => {
      req.session.usuario = req.session.user;
      res.redirect("/productos/carrito");
    })
    .catch((err) => {
      console.log("error", err);
    });
}
}

module.exports = productosControllers;
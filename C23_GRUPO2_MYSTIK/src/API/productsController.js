/* 
const db = require('../database/models');


 const productsController = {
  allProducts: (req, res) => {
    db.Producto.findAll()
      .then(productos => {
        res.status(200).json({
          status: 200,
          totalProductos: productos.length,
          todosLosProductos: productos,
          categorias:productos.categorias_id,
        })
    
      })
      
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  },
  productByID: (req,res) =>{
    db.Producto.findByPk(req.params.id)
      .then(producto => {
        res.status(200).json({
          status: 200,
          producto:producto
        })
    
      })
      
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  }
}

module.exports = productsController */


const db = require("../database/models");

const modelResponseProduct = {
  attributes : {
    exclude : [
      'createdAt', 
      'updatedAt', 
      'categorias_id',
      'talles_id',
      'colecciones_id',
      'colores_id',
      'imagen_id' 
    ]
  },  
  include: [
    {
        association : 'categoria',
        attributes : ['nombre_categoria']
    },
    {
      association : 'talle',
      attributes : ['nombre_talle']
    },
    {
      association : 'coleccion',
      attributes : ['nombre_coleccion']
    },
    {
      association : 'color',
      attributes : ['nombre_color']
    },
 /*    {
      association : 'imagenes',
      attributes : ['name']
    }  */
  ] 
}

module.exports = {
  allProducts : async (req, res) => {
    try {
      const { count, rows} = await db.Producto.findAndCountAll(modelResponseProduct)

      const products = rows.map(product => {
        return {
          ...product.dataValues,
          detail : `${req.protocol}://${req.get('host')}/products/${product.id}`
        }
      })

      return res.status(200).json({
        ok : true,
        count,
        products
    })
    } catch (error) {
      return res.status(error.status || 500).json({
        ok : false,
        msg : error.message || 'Error al iniciar API'
    })
  }
  },
  productByID: async (req, res) => {
    try {
      const product = await db.Producto.findByPk(req.params.id, modelResponseProduct)

      const productCustom = {
        ...product.dataValues,
        categoria : product.categoria.nombre,
        talle : product.talle.nombre,
        coleccion : product.coleccion.nombre, 
        color : product.colores.nombre,
       /*  imagenes : `${req.protocol}://${req.get('host')}/images/products/${product.imagen}` */ 
      }

      return res.status(200).json({
        ok : true,
        product : productCustom
      })
    } catch (error) {
      return res.status(error.status || 500).json({
        ok : false,
        msg : error.message || 'Error al iniciar API'
    })}
  }
}



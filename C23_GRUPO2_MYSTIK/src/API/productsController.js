
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

module.exports = productsController




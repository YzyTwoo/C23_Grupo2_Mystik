
const db = require('../database/models')
const Producto = db.Producto;

const productsController ={
// Obtener todos los productos
allProducts :
async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
},

// Obtener un producto por ID
 productId : 
 async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (producto === null) {
      res.status(404).json({ message: 'Producto no encontrado' });
    } else {
      res.json(producto);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
},

// Agregar un nuevo producto
productAdd :
 async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
},
}

module.exports = productsController
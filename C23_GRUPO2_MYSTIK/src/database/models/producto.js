'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Producto.hasMany(models.Imagen, { foreignKey: 'productos_id', as: 'imagenes' });
      Producto.belongsTo(models.Talle, { foreignKey: 'talles_id', as: 'talle' });
      Producto.belongsTo(models.Coleccion, { foreignKey: 'colecciones_id', as: 'coleccion' });
      Producto.belongsTo(models.Categoria, { foreignKey: 'categorias_id', as: 'categoria' });
      Producto.belongsTo(models.Color, { foreignKey: 'colores_id', as: 'color' });
    }
  }
  Producto.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    descripcion: DataTypes.STRING,
    stock: DataTypes.STRING,
    talles_id:DataTypes.STRING,
    colecciones_id:DataTypes.INTEGER,
    categorias_id:DataTypes.STRING,
    colores_id:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Producto',
    tableName: 'productos'
  });
  return Producto;
};
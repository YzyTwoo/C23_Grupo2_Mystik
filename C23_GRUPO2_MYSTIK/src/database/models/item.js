'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsTo(Producto, { foreignKey: 'productos_id', as: 'producto' });
      Item.belongsTo(Orden, { foreignKey: 'ordenes_id', as: 'orden' });
      
    }
  }
  Item.init({
    cantidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
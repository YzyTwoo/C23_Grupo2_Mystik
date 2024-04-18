'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Talle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Talle.hasMany(models.Producto, { foreignKey: 'talles_id', as: 'productos' });
    }
  }
  Talle.init({
    nombre_talle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Talle',
    tableName: 'talles',
  });
  return Talle;
};
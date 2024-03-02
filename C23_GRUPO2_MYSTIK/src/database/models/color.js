'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Color.hasMany(models.Producto, { foreignKey: 'colores_id', as: 'productos' });
    }
  }
  Color.init({
    nombre_color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Color',
    tableName: 'colores',
  });
  return Color;
};
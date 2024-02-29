'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coleccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Coleccion.hasMany(models.Producto, { foreignKey: 'colecciones_id', as: 'productos' });
    }
  }
  Coleccion.init({
    nombre_coleccion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Coleccion',
    tableName: 'colecciones'
  });
  return Coleccion;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coleccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Producto.belongsTo(Coleccion, { foreignKey: 'colecciones_id', as: 'coleccion' });
    }
  }
  coleccion.init({
    nombre_coleccion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'coleccion',
  });
  return coleccion;
};
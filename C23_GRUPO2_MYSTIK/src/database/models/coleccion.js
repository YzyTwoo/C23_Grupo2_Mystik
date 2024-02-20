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
      // define association here
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
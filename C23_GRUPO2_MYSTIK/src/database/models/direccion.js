'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class direcciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Direccion.belongsTo(Usuario, { foreignKey: 'usuarios_id', as: 'usuario' });
    }
  }
  direcciones.init({
    direccion: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    provincia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'direccion',
  });
  return direcciones;
};
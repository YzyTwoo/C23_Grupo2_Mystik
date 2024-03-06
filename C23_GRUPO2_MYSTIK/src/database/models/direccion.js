'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Direccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Direccion.belongsTo(models.Usuario, { foreignKey: 'usuarios_id', as: 'usuario' });
    }
  }
  Direccion.init({
    direccion: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    provincia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Direccion',
    tableName: 'direcciones'
  });
  return Direccion;
};
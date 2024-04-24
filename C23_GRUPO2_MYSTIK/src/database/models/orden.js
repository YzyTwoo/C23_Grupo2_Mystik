'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orden extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orden.belongsTo(models.Usuario, { foreignKey: 'usuarios_id', as: 'usuario' });
      Orden.belongsTo(models.Estado, { foreignKey: 'estados_id', as: 'estado' });
    }
  }
  Orden.init({
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orden',
    tableName: 'ordenes'
  });
  return Orden;
};
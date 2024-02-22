'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class estado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orden.belongsTo(Estado, { foreignKey: 'estados_id', as: 'estado' });
    }
  }
  estado.init({
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'estado',
  });
  return estado;
};
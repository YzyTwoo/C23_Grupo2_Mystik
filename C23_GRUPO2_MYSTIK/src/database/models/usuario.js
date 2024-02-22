'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.belongsTo(Rol, { foreignKey: 'roles_id', as: 'rol' });
      Usuario.hasMany(Direccion, { foreignKey: 'usuarios_id', as: 'direcciones' });
      Usuario.hasMany(Orden, { foreignKey: 'usuarios_id', as: 'ordenes' });
    }
  }
  usuario.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    contrasenia: DataTypes.STRING,
    imagen: DataTypes.STRING,
    telefono: DataTypes.STRING,
    genero: DataTypes.STRING,
    nacimiento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};
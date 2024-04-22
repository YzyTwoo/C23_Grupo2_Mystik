'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.belongsTo(models.Rol, { foreignKey: 'roles_id', as: 'rol' });
      Usuario.hasMany(models.Direccion, { foreignKey: 'usuarios_id', as: 'direcciones' });
      Usuario.hasMany(models.Orden, { foreignKey: 'usuarios_id', as: 'ordenes' });
      Usuario.belongsToMany(models.Producto, {through: 'Items', foreignKey:'usuarios_id', otherKey:'productos_id', as: 'items'});
    }
  }
  Usuario.init({
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
    modelName: 'Usuario',
    tableName: 'usuarios'
  });
  return Usuario;
};
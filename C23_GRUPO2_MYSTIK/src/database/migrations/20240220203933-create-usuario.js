'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataType) {
    await queryInterface.createTable('usuarios', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        unsigned: true,
        autoIncrement: true
    },
    nombre:{
        type: DataType.STRING(255),
        allowNull: false
    },
    apellido:{
        type: DataType.STRING(255),
        allowNull: true
    },
    email:{
        type: DataType.STRING(255),
        allowNull: false,
        unique: true
    },
    contrasenia:{
        type: DataType.STRING(100),
        allowNull: false
    },
    imagen:{
        type: DataType.STRING(255),
        allowNull: true
    },
    telefono:{
        type: DataType.STRING(255),
        allowNull: true
    },
    genero:{
        type: DataType.STRING(255),
        allowNull: true
    },
    nacimiento:{
        type: DataType.DATE,
        allowNull: true
    },
    roles_id: {
        type: DataType.INTEGER,
        allowNull: false,
        references: {
          model: 'roles', 
          key: 'id'       
        }
    },
    createdAt:{
      type: DataType.DATEONLY,
      allowNull: false
    },
    updatedAt:{
      type: DataType.DATEONLY,
      allowNull: false
    }
    });
  },
  async down(queryInterface, DataType) {
    await queryInterface.dropTable('usuarios');
  }
};
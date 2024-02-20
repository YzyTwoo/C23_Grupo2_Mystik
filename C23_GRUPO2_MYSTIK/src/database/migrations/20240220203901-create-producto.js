'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataType) {
    await queryInterface.createTable('Productos', {
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
    precio:{
        type: DataType.DECIMAL(6,2),
        allowNull: false,
        unsigned: true
    },
    descripcion:{
        type: DataType.STRING(500),
        allowNull: false,
    },
    stock:{
        type: DataType.STRING(45),
        allowNull: true
    }
    });
  },
  async down(queryInterface, DataType) {
    await queryInterface.dropTable('Productos');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataType) {
    await queryInterface.createTable('colecciones', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: true,
        unsigned: true,
        autoIncrement: true
    },
    nombre_coleccion:{
        type: DataType.STRING(255),
        allowNull: true
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
    await queryInterface.dropTable('colecciones');
  }
};
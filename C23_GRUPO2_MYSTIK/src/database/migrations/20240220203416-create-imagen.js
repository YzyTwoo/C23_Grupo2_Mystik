'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataType) {
    await queryInterface.createTable('Imagenes', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        unsigned: true,
        autoIncrement: true
    },
    file:{
        type: DataType.STRING(255),
        allowNull: true
    },
    path:{
        type: DataType.STRING(255),
        allowNull: true
    }
    });
  },
  async down(queryInterface, DataType) {
    await queryInterface.dropTable('Imagenes');
  }
};
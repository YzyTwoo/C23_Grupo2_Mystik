'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataType) {
    await queryInterface.createTable('imagenes', {
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
    },
    productos_id: {
      type: DataType.INTEGER,
      allowNull: false,
      references: {
        model: 'productos',
        key: 'id'
      },
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
    await queryInterface.dropTable('imagenes');
  }
};
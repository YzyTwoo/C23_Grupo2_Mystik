'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataType) {
    await queryInterface.createTable('ordenes', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        unsigned: true,
        autoIncrement: true
    },
    total:{
        type: DataType.INTEGER,
        allowNull: true
    },
    usuarios_id: {
      type: DataType.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      },
    },
    estados_id: {
      type: DataType.INTEGER,
      allowNull: false,
      references: {
        model: 'estados',
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
    await queryInterface.dropTable('ordenes');
  }
};
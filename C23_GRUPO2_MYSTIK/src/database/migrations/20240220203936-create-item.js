'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataType) {
    await queryInterface.createTable('items', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        unsigned: true,
        autoIncrement: true
    },
    cantidad:{
        type: DataType.INTEGER,
        allowNull: true
    },
    productos_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'productos',
        key: 'id'
      },
    },
    ordenes_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'ordenes',
        key: 'id'
      },
    },
    });
  },
  async down(queryInterface, DataType) {
    await queryInterface.dropTable('items');
  }
};
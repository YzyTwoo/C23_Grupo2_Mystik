'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataType) {
    await queryInterface.createTable('Items', {
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
    }
    });
  },
  async down(queryInterface, DataType) {
    await queryInterface.dropTable('Items');
  }
};
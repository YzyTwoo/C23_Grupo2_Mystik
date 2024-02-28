'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataType) {
    await queryInterface.createTable('roles', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        unsigned: true,
        autoIncrement: true
    },
    rol:{
        type: DataType.STRING(255),
        allowNull: false
    }
    });
  },
  async down(queryInterface, DataType) {
    await queryInterface.dropTable('roles');
  }
};
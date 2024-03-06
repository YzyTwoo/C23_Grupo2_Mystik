'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataType) {
    await queryInterface.createTable('talles', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        unsigned: true,
        autoIncrement: true
    },
    nombre_talle:{
        type: DataType.STRING(90),
        allowNull: true
    }
    });
  },
  async down(queryInterface, DataType) {
    await queryInterface.dropTable('talles');
  }
};
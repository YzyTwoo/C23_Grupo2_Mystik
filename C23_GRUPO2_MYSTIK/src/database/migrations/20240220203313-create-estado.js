'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataType) {
    await queryInterface.createTable('estados', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        unsigned: true,
        autoIncrement: true
    },
    estado:{
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
    await queryInterface.dropTable('estados');
  }
};
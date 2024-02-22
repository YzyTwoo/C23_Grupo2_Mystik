'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataType) {
    await queryInterface.createTable('Ordenes', {
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
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      },
    },
    estados_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'estados',
        key: 'id'
      },
    }
    });
  },
  async down(queryInterface, DataType) {
    await queryInterface.dropTable('Ordenes');
  }
};
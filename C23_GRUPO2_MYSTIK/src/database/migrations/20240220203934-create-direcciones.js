'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataType) {
    await queryInterface.createTable('Direcciones', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        unsigned: true,
        autoIncrement: true
    },
    direccion:{
        type: DataType.STRING(255),
        allowNull: true
    },
    ciudad:{
        type: DataType.STRING(255),
        allowNull: true
    },
    provincia:{
        type: DataType.STRING(255),
        allowNull: true
    },
    usuarios_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      },
    }
    });
    
  },
  async down(queryInterface, DataType) {
    await queryInterface.dropTable('Direcciones');
  }
};



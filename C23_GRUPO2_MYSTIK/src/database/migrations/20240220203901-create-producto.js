'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataType) {
    await queryInterface.createTable('Productos', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        unsigned: true,
        autoIncrement: true
    },
    nombre:{
        type: DataType.STRING(255),
        allowNull: false
    },
    precio:{
        type: DataType.DECIMAL(6,2),
        allowNull: false,
        unsigned: true
    },
    descripcion:{
        type: DataType.STRING(500),
        allowNull: false,
    },
    stock:{
        type: DataType.STRING(45),
        allowNull: true
    },
    talles_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'talles',
        key: 'id'
      },
    },
    colecciones_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'colecciones',
        key: 'id'
      },
    },
    categorias_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'categorias',
        key: 'id'
      }
    },
    colores_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'colores',
        key: 'id'
      },
    }
    });
  },
  async down(queryInterface, DataType) {
    await queryInterface.dropTable('Productos');
  }
};
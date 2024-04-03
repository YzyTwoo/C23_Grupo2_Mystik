'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataType) {
    await queryInterface.createTable('productos', {
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
    imagen_id: {
      type: DataType.STRING(255),
    },
    precio:{
        type: DataType.DECIMAL(10,2),
        allowNull: false,
        unsigned: true
    },
    descripcion:{
        type: DataType.STRING(500),
        allowNull: false,
    },
    stock:{
        type: DataType.SMALLINT,
        allowNull: true
    },
    talles_id: {
      type: DataType.INTEGER,
      allowNull: false,
      references: {
        model: 'talles',
        key: 'id'
      },
    },
    colecciones_id: {
      type: DataType.INTEGER,
      allowNull: false,
      references: {
        model: 'colecciones',
        key: 'id'
      },
    },
    categorias_id: {
      type: DataType.INTEGER,
      allowNull: false,
      references: {
        model: 'categorias',
        key: 'id'
      }
    },
    colores_id: {
      type: DataType.INTEGER,
      allowNull: false,
      references: {
        model: 'colores',
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
    await queryInterface.dropTable('productos');
  }
};
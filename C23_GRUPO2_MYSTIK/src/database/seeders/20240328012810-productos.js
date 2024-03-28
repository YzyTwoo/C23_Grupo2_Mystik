'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('productos', [
      {
      nombre: 'Chaos City',
      precio: '44000.99',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam lorem a magna vehicula',
      stock: 'true',
      talles_id: '1',
      colecciones_id: '2',
      categorias_id: '1',
      colores_id: '1',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      nombre: 'Rain',
      precio: '44000.99',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam lorem a magna vehicula',
      stock: 'true',
      talles_id: '1',
      colecciones_id: '2',
      categorias_id: '1',
      colores_id: '2',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      nombre: 'Satanic',
      precio: '44000.99',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam lorem a magna vehicula',
      stock: 'true',
      talles_id: '4',
      colecciones_id: '2',
      categorias_id: '1',
      colores_id: '3',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      nombre: 'Weed every day.',
      precio: '55000.99',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam lorem a magna vehicula',
      stock: 'true',
      talles_id: '4',
      colecciones_id: '2',
      categorias_id: '1',
      colores_id: '1',
      createdAt: new Date,
      updatedAt: new Date
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('productos', null, {});
  }
};

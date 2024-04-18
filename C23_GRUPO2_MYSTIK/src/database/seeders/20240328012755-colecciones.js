'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('colecciones', [
      {
      nombre_coleccion: 'Invierno',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      nombre_coleccion: 'Otoño',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      nombre_coleccion: 'Primavera',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      nombre_coleccion: 'Verano',
      createdAt: new Date,
      updatedAt: new Date
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('colecciones', null, {});
  }

};

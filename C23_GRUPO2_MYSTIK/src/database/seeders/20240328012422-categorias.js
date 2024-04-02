'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('categorias', [
      {
      nombre_categoria: 'Buzo'
    },
    {
      nombre_categoria: 'Campera'
    },
    {
      nombre_categoria: 'Sweater'
    },
    {
      nombre_categoria: 'Remera'
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('categorias', null, {});
    
  }
};

'use strict';

  /** @type {import('sequelize-cli').Migration} **/
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('colores', [
      {
      nombre_color: 'Negro'
    },
    {
      nombre_color: 'Blanco'
    },
    {
      nombre_color: 'gris'
    },
    {
      nombre_color: 'Rojo'
    },
  ], {});
  
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('colores', null, {});
  }
};

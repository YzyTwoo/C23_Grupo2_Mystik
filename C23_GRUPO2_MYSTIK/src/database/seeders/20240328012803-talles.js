'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('talles', [
      {
        nombre_talle: 'S'
      },
      {
        nombre_talle: 'M'
      },
      {
        nombre_talle: 'L'
      },
      {
        nombre_talle: 'XL'
      },
      {
        nombre_talle: 'XXL'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('talles', null, {});
  }
};

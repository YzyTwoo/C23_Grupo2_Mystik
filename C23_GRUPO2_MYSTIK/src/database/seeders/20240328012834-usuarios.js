'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
      nombre: 'Leonel',
      apellido: 'Anchaba',
      email: 'leoanchaba@gmail.com',
      contrasenia: '$2a$10$Yo.QkjMLz9M8PBK1tqfvPeFvYKOfUFQy.Rjl5DEIm82aCMJAGfXfq',
      telefono: '1158918203',
      nacimiento: new Date,
      roles_id: '1',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      nombre: 'Ezequiel',
      apellido: 'Calvo',
      email: 'ezecalvo@gmail.com',
      contrasenia: '$2a$10$Yo.QkjMLz9M8PBK1tqfvPeFvYKOfUFQy.Rjl5DEIm82aCMJAGfXfq',
      telefono: '1158918204',
      nacimiento: new Date,
      roles_id: '1',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      nombre: 'Tiziano',
      apellido: 'Orieta',
      email: 'tiziorieta@gmail.com',
      contrasenia: '$2a$10$Yo.QkjMLz9M8PBK1tqfvPeFvYKOfUFQy.Rjl5DEIm82aCMJAGfXfq',
      telefono: '1158918203',
      nacimiento: new Date,
      roles_id: '1',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      nombre: 'Emiliano',
      apellido: 'Ferreira',
      email: 'emiferro@gmail.com',
      contrasenia: '$2a$10$Yo.QkjMLz9M8PBK1tqfvPeFvYKOfUFQy.Rjl5DEIm82aCMJAGfXfq',
      telefono: '1158918203',
      nacimiento: new Date,
      roles_id: '1',
      createdAt: new Date,
      updatedAt: new Date
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};

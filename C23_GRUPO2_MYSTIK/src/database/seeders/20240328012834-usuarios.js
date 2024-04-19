'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
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
      nombre: 'Lautaro',
      apellido: 'Contreras',
      email: 'laucontreras@gmail.com',
      contrasenia: '$2a$10$Yo.QkjMLz9M8PBK1tqfvPeFvYKOfUFQy.Rjl5DEIm82aCMJAGfXfq',
      telefono: '1158918203',
      nacimiento: new Date,
      roles_id: '1',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      nombre: 'Ayelen',
      apellido: 'Coppa',
      email: 'ayeCoppa@gmail.com',
      contrasenia: '$2a$10$Yo.QkjMLz9M8PBK1tqfvPeFvYKOfUFQy.Rjl5DEIm82aCMJAGfXfq',
      telefono: '1158918204',
      nacimiento: new Date,
      roles_id: '1',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      nombre: 'Valentina',
      apellido: 'Rodriguez',
      email: 'valenrodriguez@gmail.com',
      contrasenia: '$2a$10$Yo.QkjMLz9M8PBK1tqfvPeFvYKOfUFQy.Rjl5DEIm82aCMJAGfXfq',
      telefono: '1158918203',
      nacimiento: new Date,
      roles_id: '1',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      nombre: 'Fabian',
      apellido: 'Medina',
      email: 'fabimedina@gmail.com',
      contrasenia: '$2a$10$Yo.QkjMLz9M8PBK1tqfvPeFvYKOfUFQy.Rjl5DEIm82aCMJAGfXfq',
      telefono: '1158918203',
      nacimiento: new Date,
      roles_id: '1',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      nombre: 'Prueba User',
      apellido: 'Demostración',
      email: 'prueba@gmail.com',
      contrasenia: '$2a$10$Yo.QkjMLz9M8PBK1tqfvPeFvYKOfUFQy.Rjl5DEIm82aCMJAGfXfq',
      telefono: '1158918203',
      nacimiento: new Date,
      roles_id: '2',
      createdAt: new Date,
      updatedAt: new Date
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};

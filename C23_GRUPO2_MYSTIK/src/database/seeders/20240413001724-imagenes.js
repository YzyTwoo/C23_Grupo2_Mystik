'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('imagenes', [
      {
      file: '1710700218829_img_product_.jpg',
      path: '/public/images/products/1710700218829_img_product_.jpg',
      productos_id: '1',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '1710700364401_img_product_.jpg',
      path: '/public/images/products/1710700364401_img_product_.jpg',
      productos_id: '2',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '1710700455126_img_product_.jpg',
      path: '/public/images/products/1710700455126_img_product_.jpg',
      productos_id: '3',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '1710700516189_img_product_.jpg',
      path: '/images/products/1710700516189_img_product_.jpg',
      productos_id: '4',
      createdAt: new Date,
      updatedAt: new Date
    }
  ], {});
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('imagenes', null, {});
  }
};

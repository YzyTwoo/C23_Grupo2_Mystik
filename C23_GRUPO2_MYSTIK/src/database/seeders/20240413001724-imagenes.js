'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('imagenes', [
      {
      file: '1234561246579_img_product_.jpg',
      path: '/public/images/products/1234561246579_img_product_.jpg',
      productos_id: '1',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '1234236576579_img_product_.jpg',
      path: '/public/images/products/1234236576579_img_product_.jpg',
      productos_id: '2',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '45678236576579_img_product_.jpg',
      path: '/public/images/products/45678236576579_img_product_.jpg',
      productos_id: '3',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '4562312576579_img_product_.jpg',
      path: '/images/products/4562312576579_img_product_.jpg',
      productos_id: '4',
      createdAt: new Date,
      updatedAt: new Date
    },{
      file: '1713410128871_img_product_.jpg',
      path: '/images/products/1713410128871_img_product_.jpg',
      productos_id: '5',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '17134543471_img_product_.jpg',
      path: '/images/products/17134543471_img_product_.jpg',
      productos_id: '6',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '1713342432_img_product_.jpg',
      path: '/images/products/1713342432_img_product_.jpg',
      productos_id: '7',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '17123120871_img_product_.jpg',
      path: '/images/products/17123120871_img_product_.jpg',
      productos_id: '8',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '1713410348871_img_product_.jpg',
      path: '/images/products/1713410348871_img_product_.jpg',
      productos_id: '9',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '89910868871_img_product_.jpg',
      path: '/images/products/89910868871_img_product_.jpg',
      productos_id: '10',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '171341232171_img_product_.jpg',
      path: '/images/products/171341232171_img_product_.jpg',
      productos_id: '11',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '171341323871_img_product_.jpg',
      path: '/images/products/171341323871_img_product_.jpg',
      productos_id: '12',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '1713410868781_img_product_.jpg',
      path: '/images/products/1713410868781_img_product_.jpg',
      productos_id: '13',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '171343243271_img_product_.jpg',
      path: '/images/products/171343243271_img_product_.jpg',
      productos_id: '14',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '171994065871_img_product_.jpg',
      path: '/images/products/171994065871_img_product_.jpg',
      productos_id: '15',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '172412361271_img_product_.jpg',
      path: '/images/products/172412361271_img_product_.jpg',
      productos_id: '16',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '12345610868871_img_product_.jpg',
      path: '/images/products/12345610868871_img_product_.jpg',
      productos_id: '17',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '12345612345671_img_product_.jpg',
      path: '/images/products/12345612345671_img_product_.jpg',
      productos_id: '18',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '1714214268871_img_product_.jpg',
      path: '/images/products/1714214268871_img_product_.jpg',
      productos_id: '19',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '213310868871_img_product_.jpg',
      path: '/images/products/213310868871_img_product_.jpg',
      productos_id: '20',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '1713442868871_img_product_.jpg',
      path: '/images/products/1713442868871_img_product_.jpg',
      productos_id: '21',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '1714214268871_img_product_.jpg',
      path: '/images/products/1714214268871_img_product_.jpg',
      productos_id: '22',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '17134124422871_img_product_.jpg',
      path: '/images/products/17134124422871_img_product_.jpg',
      productos_id: '23',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '14242410868871_img_product_.jpg',
      path: '/images/products/14242410868871_img_product_.jpg',
      productos_id: '24',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '1725410868871_img_product_.jpg',
      path: '/images/products/1725410868871_img_product_.jpg',
      productos_id: '25',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '12345612345623_img_product_.jpg',
      path: '/images/products/12345612345623_img_product_.jpg',
      productos_id: '26',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '171344556671_img_product_.jpg',
      path: '/images/products/171344556671_img_product_.jpg',
      productos_id: '27',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '173524868871_img_product_.jpg',
      path: '/images/products/173524868871_img_product_.jpg',
      productos_id: '28',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '1713410232131_img_product_.jpg',
      path: '/images/products/1713410232131_img_product_.jpg',
      productos_id: '29',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      file: '1725410868871_img_product_.jpg',
      path: '/images/products/1725410868871_img_product_.jpg',
      productos_id: '30',
      createdAt: new Date,
      updatedAt: new Date
    }
  ], {});
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('imagenes', null, {});
  }
};

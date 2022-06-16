'use strict';
const bcrypt = require ('bcrypt');


module.exports = {
  async up (queryInterface, Sequelize) {
    const password = 'carlinhos123'
    const newPassword = bcrypt.hashSync(password,6)
    
    await queryInterface.bulkInsert('user', [{
      name: 'Carlos Alberto Sindico',
      username: 'carlinhos_sindico',
      avatar: '1',
      email: 'carlos@gmail.com',
      apartment: 109,
      password: newPassword,
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    
      
          
      

    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

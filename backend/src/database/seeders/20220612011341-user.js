'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [{
      name: 'Carlos Alberto Sindico',
      username: 'carlinhos_sindico',
      avatar: '1',
      email: 'carlos@gmail.com',
      apartment: 109,
      password: 'carlinhos123',
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'João Silva',
      username: 'joao_silva',
      avatar: '2',
      email: 'joao@gmail.com',
      apartment: 110,
      password: '123456',
      admin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Maria Betânia',
      username: 'mariab',
      avatar: '2',
      email: 'mariab@gmail.com',
      apartment: 200,
      password: '1234567',
      admin: false,
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

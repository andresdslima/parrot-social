'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('post', [{
      user_id: 1,
      content: 'Teste de post',
      name: 'Carlos Alberto Sindico',
      apartment: 109,
      avatar:'1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      content: 'bla bla bla',
      name: 'João Silva',
      apartment: 110,
      avatar:'2',
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

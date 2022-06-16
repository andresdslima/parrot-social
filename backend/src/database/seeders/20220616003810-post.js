'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('post', [{
      user_id: 11,
      content: 'Teste de post',
      name: 'Juju',
      apartment: 105,
      avatar:'2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 13,
      content: 'bla bla bla',
      name: 'Maria abc',
      apartment: 1115,
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

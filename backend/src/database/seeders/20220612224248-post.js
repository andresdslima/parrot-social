'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Post', [{
      user_id: 9,
      content: 'bla bla bla',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 10,
    content:'blablabla teste',
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

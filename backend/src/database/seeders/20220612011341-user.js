'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User', [{
      name: 'Carlos Alberto',
      email: 'carlos@gmail.com',
      apartment: 100,
      password: 'carlinhos123',
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
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

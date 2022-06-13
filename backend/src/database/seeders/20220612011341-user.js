'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User', [{
      name: 'Carlos Alberto3',
      username: 'carlinhos103',
      avatar: '2',
      email: 'carlos3@gmail.com',
      apartment: 100,
      password: 'carlinhos123',
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Carlos23 Alberto',
      username: 'carlinhos3210',
      avatar: '2',
      email: 'carlos23@gmail.com',
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

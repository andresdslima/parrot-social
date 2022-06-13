'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User', [{
      name: 'Carlos Alberto13',
      username: 'carlinhos1103',
      avatar: '2',
      email: 'carlos31@gmail.com',
      apartment: 100,
      password: 'carlinhos123',
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Carlos123 Alberto',
      username: 'carlinhos13210',
      avatar: '2',
      email: 'carlos213@gmail.com',
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

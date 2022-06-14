'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING(70)
      },
      username: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING(15)
      },
      avatar: {
        allowNull: false,
        type: Sequelize.STRING(1)
      },
      email: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING(70)
      },
      apartment: {
        type: Sequelize.INTEGER
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(120)
      },
      admin: {
        allowNull: false,
          type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
  }
};

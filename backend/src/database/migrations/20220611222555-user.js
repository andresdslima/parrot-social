'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('User', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(70)
      },
      email: {
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
    await queryInterface.dropTable('User');
  }
};

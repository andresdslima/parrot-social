'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('post', {
      post_id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'user', key: "user_id" },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING(300)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(300),
      },
      apartment: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      avatar: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('post');
  }
};
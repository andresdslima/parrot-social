
const db = require("../index");
const { DataTypes } = require("sequelize");



const Post = db.define(
  "Post",
  {
    post_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'user', key: "user_id" },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    content: {
      allowNull: false,
      type: DataTypes.STRING,
      length: 300,
    },
    createdAt: {
      allowNull: true,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  },
  {
    tableName: "post",
  }
);

module.exports = Post;
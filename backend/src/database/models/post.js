// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Post extends Model {
    
//     static associate(models) {
//       ser.hasMany (models.post, {foreignKey: 'user_id'})
//     }
//   }
//   Post.init({
//     post_id: DataTypes.INTEGER,
//     user_id: DataTypes.INTEGER,
//     comments: DataTypes.STRING,
//     createdAt: DataTypes.DATE,
//     updatedAt: DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'post',
//   });
//   return Post;
// };
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
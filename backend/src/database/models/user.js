// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
    
//     static associate(models) {
      
//     }
//   }
//   User.init({
//     user_id: DataTypes.INTEGER,
//     name: DataTypes.STRING,
//     username: DataTypes.STRING,
//     avatar: DataTypes.STRING,
//     email: DataTypes.STRING,
//     apartament: DataTypes.INTEGER,
//     password: DataTypes.STRING,
//     admin: DataTypes.BOOLEAN,
//     createdAt: DataTypes.DATE,
//     updatedAt: DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'user',
//   });
//   return User;
// };
const db = require("../index");
const { DataTypes } = require("sequelize");

const User = db.define(
  "User",
  {
    user_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      unique: true,  
      allowNull: false,
      type: DataTypes.STRING,    
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    apartment: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    admin: {
      allowNull: false,
      type: DataTypes.BOOLEAN
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
    tableName: "user",
  }
);

module.exports = User;
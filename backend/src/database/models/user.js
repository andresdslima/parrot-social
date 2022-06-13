'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      
    }
  }
  User.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    avatar: DataTypes.STRING,
    email: DataTypes.STRING,
    apartament: DataTypes.INTEGER,
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'user',
  });
  return User;
};
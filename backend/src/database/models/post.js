'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    
    static associate(models) {
      ser.hasMany (models.post, {foreignKey: 'user_id'})
    }
  }
  Post.init({
    post_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    comments: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'post',
  });
  return Post;
};
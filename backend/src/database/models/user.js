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
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    apartment: {
      type: DataTypes.INTEGER
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    admin: {
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
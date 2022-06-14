const db = require ('../database/index')
const { DataTypes } = require ('sequelize')

const User = db.define ('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        unique: true,
        type: DataTypes.STRING
    },
    username: {
        unique: true,
        type: DataTypes.STRING
    },
    avatar: {
        type: DataTypes.STRING  
    },
    email: {
        unique: true,
        type: DataTypes.STRING
    },
    apartment: {
        type: DataTypes.INTEGER
    },
    password: {
        type: DataTypes.STRING
    },
    admin: {
        type: DataTypes.BOOLEAN
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'user'
})

module.exports = User
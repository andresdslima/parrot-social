const db = require ('../dataBase/dbConexao')
const { DataTypes } = require ('sequelize')

const User = db.define ('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.INTEGER
    },
    username: {
        type: DataTypes.STRING
    },
    avatar: {
        type: DataTypes.STRING  
    },
    email: {
        type: DataTypes.STRING
    },
    apartament: {
        type: DataTypes.STRING
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
const db = require('../database/index')
const {
    DataTypes
} = require('sequelize')
const {
    User
} = require('./User')

const Post = db.define('post', {
    post_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'idUser'
        }
    },
    content: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING,

    },
    apartment: {

        type: DataTypes.INTEGER,
    },
    avatar: {

        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'post'
})

module.exports = Post
const User = require ('../models/User')
const Post = require ('../models/Post')

User.hasMany(
    Post, {
        foreignKey: 'user_id'
    }
)

Post.belongsTo (
    User, {
        foreignKey: 'user_id'
    }
)


module.exports = {
    User,
    Post
}
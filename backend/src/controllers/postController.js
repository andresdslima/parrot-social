const { Post } = require("../database/models/index")

const PostController = {
    async create(req,res) {
        const newPost = await Post.create({
            ...req.body
        })

        return res.status(201).json(newPost)
    }
}

module.exports = PostController
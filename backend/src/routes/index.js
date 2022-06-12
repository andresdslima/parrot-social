const UserController = require('../controllers/userController')
const PostController = require('../controllers/postController')

const express = require('express'),
routes = express.Router()


routes.post("/user", UserController.create)


routes.post("/post", PostController.create)
routes.get("/post", PostController.listAllPosts)
routes.put("/post/:id", PostController.updatePost)
routes.delete("/post/:id", PostController.deletePost)



module.exports = routes
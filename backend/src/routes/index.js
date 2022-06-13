const UserController = require('../controllers/userController')
const PostController = require('../controllers/postController')

const express = require('express'),
routes = express.Router()


routes.post("/user", UserController.create)
routes.get("/user", UserController.listAllUsers)
routes.get("/user/:username/posts", UserController.listPostsByUsername)
routes.put("/user/:id", UserController.updateUser)
routes.delete("/user/:id", UserController.deleteUser)



routes.post("/post", PostController.create)
routes.get("/post", PostController.listAllPosts)
routes.put("/post/:id", PostController.updatePost)
routes.delete("/post/:id", PostController.deletePost)



module.exports = routes
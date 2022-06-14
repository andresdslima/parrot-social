
const express = require('express')
const UserController = require('../controllers/userController')
const PostController = require('../controllers/postController')
const AuthController = require('../controllers/authController')

const userCreateValidation = require('../validations/users/create')
const authLoginValidation = require('../validations/auth/login')
const routes = express.Router()


routes.post("/user", userCreateValidation, UserController.create)
routes.post("/login", authLoginValidation, AuthController.login)
routes.get("/user", UserController.listAllUsers)
routes.get("/user/:username/posts", UserController.listPostsByUsername)
routes.put("/user/:id", UserController.updateUser)
routes.delete("/user/:id", UserController.deleteUser)



routes.post("/post", PostController.create)
routes.get("/post", PostController.listAllPosts)
routes.put("/post/:id", PostController.updatePost)
routes.delete("/post/:id", PostController.deletePost)



module.exports = routes
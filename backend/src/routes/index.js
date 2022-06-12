const UserController = require('../controllers/userController')
const PostController = require('../controllers/postController')

const express = require('express'),
routes = express.Router()


routes.post("/user", UserController.create)


routes.post("/post", PostController.create)


module.exports = routes
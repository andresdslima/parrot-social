const {
    User
} = require("../models");
const jwt = require('jsonwebtoken');
const secret = require('../configs/secret')
const bcrypt = require('bcrypt')

const AuthController = {

    async login(req, res) {
        console.log(req);
        const {
            email,
            password
        } = req.body

        const user = await User.findOne({
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(400).json('Email não encontrado')
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json('Senha inválida')
        }

        const token = jwt.sign({
            id: user.user_id,
            email: user.email,
            username: user.username,
            name: user.name,
            avatar: user.avatar,
            apartment: user.apartment,
            admin: user.admin
        },
            secret.key
        )

        return res.json({ token, user: {id: user.user_id, admin: user.admin} })
        


    },

};

module.exports = AuthController;
const { User } = require("../models");
const bcrypt = require('bcrypt')

const AuthController = {

    async login(req, res) {
        
        const {email, password} = req.body

        const user = await User.findOne({
            where: {
                email,
            },
        });
        
        if(!user){
             return res.status(400).json('Email não encontrado')
        }

        if(!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json('Senha inválida')
        }

        return res.json('Logado')
    

    },

};

module.exports = AuthController;
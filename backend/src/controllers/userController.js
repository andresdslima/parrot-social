const { User, Post } = require("../models")
const bcrypt = require ('bcrypt');

const UserController = {
    async create(req,res) {
        try {
        const {name,username, avatar, email, password, apartment, admin } = req.body;

        if (!name || !username || !avatar || !email || !password || !apartment || !admin)
        return res.status(400).json({
            message: 'Todas as informações são obrigatórias!'
        })
        const newPassword = bcrypt.hashSync(password,6)    
        const newUser = await User.create({
            name,
            username,
            avatar,
            email,
            password:newPassword,
            apartment,
            admin
        });

        res.json(newUser);

    } catch (error) {
        res.json('Não foi possível cadastrar o usuário');
            console.error(error);
    }
    },
    async listAllUsers(req, res) {
        try {
            const listUsers = await User.findAll();
            res.status(201).json(listUsers);
        } catch (error) {
            res.json('Falha ao listar usuários');
            console.error(error)
        }
    },

    async listPostsByUsername(req, res) {
        try {
            const {
                username
            } = req.params;
           
            const existUsername = await User.findOne({
                where: {
                   username
                }
            });

            if (!existUsername) {
                return res.status(400).json('Usuário não encontrado');
            }

            const postsByUser = await Post.findAll(

             {
                where: {
                    user_id: existUsername.user_id
                }
            });
            res.status(201).json(postsByUser);
        } catch (error) {
            res.status(404).json('Verfique os dados e tente novamente');
            console.error(error);
        };
    },

    async updateUser(req, res) {
        try {
            const {
                id
            } = req.params;
            const {
                name, username, avatar, email, apartment, password, admin
            } = req.body;

            const existId = await User.count({
                where: {
                    user_id: id
                }
            });

            if (!existId) {
                return res.status(400).json('Usuário não encontrado');
            }

            const updatedUser = await User.update({
                name, username, avatar, email, apartment, password, admin
            }, {
                where: {
                    user_id: id,
                }
            });
            res.status(201).json('Dados atualizados com sucesso');
        } catch (error) {
            res.status(404).json('Verfique os dados e tente novamente');
            console.error(error);
        };
    },
    
    async deleteUser(req, res) {
        try {
            const {
                id
            } = req.params;

            const existIdUser = await User.count({
                where: {
                    user_id:id
                }
            });

            if (!existIdUser) {
                return res.status(400).json('Usuário não encontrado');
            }

            await User.destroy({
                where: {
                    user_id:id
                }
            });

            res.status(201).json('Usuário deletado com sucesso');
        } catch (error) {
            res.json('Falha ao deletar usuário')
            console.error(error);
        }
    },

    
}

module.exports = UserController
const { User, Post } = require("../models")
const bcrypt = require('bcrypt');

const UserController = {
    async create(req, res) {
        try {
        console.log(req);
        const {name,username, avatar, email, password, apartment, admin } = req.body;

            res.json(newUser);

        } catch (error) {
            res.json('Não foi possível cadastrar o usuário');
            console.error(error);
        }
    },
    async listAllUsers(req, res) {
        try {
            console.log(req);
            const listUsers = await User.findAll();
            res.status(201).json(listUsers);
        } catch (error) {
            res.json('Falha ao listar usuários');
            console.error(error)
        }
    },

    async listPostsByUsername(req, res) {
        try {
            console.log(req);
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
            console.log(req);
            const {
                id
            } = req.params;
            const { name } = req.auth
            const {
                username, avatar, email, password, apartment
            } = req.body;

            const existId = await User.count({
                where: {
                    user_id: id,
                    name
                }
            });

            if (!existId) {
                return res.status(400).json('Erro ao atualizar usuário');
            }

            const updatedUser = await User.update({
                username, avatar, email, apartment, password
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
            console.log(req);
            const {
                id
            } = req.params;
            const { name } = req.auth

            const existIdUser = await User.count({
                where: {
                    user_id: id,
                    name
                }
            });

            if (!existIdUser) {
                return res.status(400).json('Erro ao deletar usuário');
            }

            await User.destroy({
                where: {
                    user_id: id
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
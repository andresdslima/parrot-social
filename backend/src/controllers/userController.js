const { User, Post } = require("../models")
const bcrypt = require('bcrypt');

const UserController = {
    async create(req, res) {
        try {
            console.log(req);
            const { name, username, avatar, email, password, apartment, admin } = req.body;
            const newPassword = bcrypt.hashSync(password, 6)
            const newUser = await User.create({
                name,
                username,
                avatar,
                email,
                password: newPassword,
                apartment,
                admin
            });

            res.status(201).json(newUser);

        }
        catch (error) {
            console.error(error);
            return res.json('Não foi possível cadastrar o usuário').status(400);
        };
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
                id
            } = req.params;

            const existUser = await User.findOne({
                where: {
                    id
                }
            });

            if (!existUser) {
                return res.status(400).json('Usuário não encontrado');
            };

            const postsByUser = await Post.findAll(
                {
                    where: {
                        user_id: existUser.user_id
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
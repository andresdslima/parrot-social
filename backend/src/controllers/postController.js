const { Post } = require("../models")

const PostController = {
    async create(req, res) {
        try {
            const {user_id, content } = req.body;

        if (!user_id || !content)
        return res.status(400).json({
            message: 'Id de usuário e conteúdo são obrigatórios!'
        })
        const newPost = await Post.create({
           user_id,
           content
        });

        res.json(newPost);
        } catch (error) {
            res.json('Não foi possível publicar');
            console.error(error);

        }
    },

    async listAllPosts(req, res) {
        try {
            const listPosts = await Post.findAll();
            res.status(201).json(listPosts);
        } catch (error) {
            res.json('Falha ao listar os posts');
            console.error(error)
        }
    },

   

    async updatePost(req, res) {
        try {
            const {
                id
            } = req.params;
            const {
                content
            } = req.body;

            const existId = await Post.count({
                where: {
                    post_id: id
                }
            });

            if (!existId) {
                return res.status(400).json('Post não encontrado');
            }

            const updatedPost = await Post.update({
                content
            }, {
                where: {
                    post_id: id,
                }
            });
            res.status(201).json('Post atualizado com sucesso');
        } catch (error) {
            res.status(404).json('Verfique os dados e tente novamente');
            console.error(error);
        };
    },


    async deletePost(req, res) {
        try {
            const {
                id
            } = req.params;

            const existIdPost = await Post.count({
                where: {
                    post_id:id
                }
            });

            if (!existIdPost) {
                return res.status(400).json('Post não encontrado');
            }

            await Post.destroy({
                where: {
                    post_id:id
                }
            });

            res.status(201).json('Post deletado com sucesso');
        } catch (error) {
            res.json('Falha ao deletar post')
            console.error(error);
        }
    },

}

module.exports = PostController
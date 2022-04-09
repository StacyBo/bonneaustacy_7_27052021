const fs = require('fs');
const { QueryTypes } = require('sequelize');
const { post } = require('../app');
const { Post: Post, Comment: Comment, Users: Users, sequelize } = require("../models");
const { patch } = require('../routes/user');

// ajouter un article
exports.addPost = async (req, res, next) => {
    //conversion de string a objet
    console.log(req.body)
    const postObject = JSON.parse(req.body.post);
    let post = {
        ...postObject,
        userId: req.currentUser.id,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    if (req.file) {
        post.imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    }
    Post.create(post)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur est survenue lors de l'enregistrement."
            });
        });
};

// Modifier l'article 
exports.updatePost = async (req, res, next) => {
    const newPost = JSON.parse(req.body.post);
    // Moderator can update every posts
    const whereClause = {id: req.params.id}
    if (req.currentUser.isAdmin === false) {
        whereClause.userId = req.currentUser.id;
    }
    const post = await Post.findOne({ where: whereClause });
    // 1. Chercher le nom du fichier
    if (!post) {
        return res.status(404).json({message: "La publication n'existe pas"})
    }
    if (req.file) {
        // 2. supprimer l'image du serveur si elle existe
        if (post.imageUrl) {
            const filename = post.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, function () {
            });
        }
        try {
            const newImageUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
            await post.update({content: newPost.content, imageUrl: newImageUrl});
            await post.save();
            return res.status(200).json({message: 'Publication modifiée'});
        } catch (error){
            return res.status(400).json({error});
        }
    } else {
        // Pas d'image ajoutée --> On met à jour uniquement le contenu
        try {
            await post.update({ content: newPost.content});
            await post.save();
            return res.status(200).json({message: 'Publication modifiée'});
        } catch (error) {
            return res.status(400).json({error});
        }
    }
};

// Supprimer un article
exports.deletePost = async (req, res, next) => {
    // L'admin peu supprimer tous les articles
    const whereClause = {id: req.params.id}
    if (req.currentUser.isAdmin === false) {
        whereClause.userId = req.currentUser.id;
    }
    const post = await Post.findOne({ where: whereClause });
    if (!post) {
        return res.status(404).json({ error: 'Publication non trouvée' });
    }
    // 1. Chercher le nom du fichier
    if (!post.imageUrl) {
        await Comment.destroy({where: {postId: post.id}})
        await Post.destroy({where: {id: req.params.id}})
        return res.status(200).json({message: "Publication supprimée"})
    }

    const filename = post.imageUrl.split('/images/')[1];
    // 2. supprimer l'image du serveur
    fs.unlink(`images/${filename}`, async () => {
        await Comment.destroy({where: {postId: post.id}});
        Post.destroy({where: {id: req.params.id}})
            .then(() => res.status(200).json({message: "Publication supprimée"}))
            .catch((error) => res.status(400).json({error}));
    });
};

// recuperer les articles 
exports.getPosts = async (req, res, next) => {
    const posts = await Post.findAll({
        include: [{
            model: Users
        }],
        // on donne le sens d'apparition des articles 
        order: [
            ['updatedAt', 'DESC'],
        ],
    });
    res.status(200).json(posts);
}

// recuperer les 3 derniers articles
exports.getLastPosts = async (req, res, next) => {
    const posts = await sequelize.query("SELECT * FROM posts WHERE userId=?  ORDER BY updatedAt DESC  LIMIT 3", { replacements: [req.currentUser.id], type: QueryTypes.SELECT })
        .then(post => res.status(200).json(post))
        .catch(error => res.status(404).json({ error }));
}

// recuperer un post
exports.getOnePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
        .then(post => res.status(200).json(post))
        .catch(error => res.status(404).json({ error }));
}
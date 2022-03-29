const fs = require('fs');
const { QueryTypes } = require('sequelize');
const { post } = require('../app');
const { Post: Post, Users: Users, sequelize } = require("../models");
const { patch } = require('../routes/user');

// ajouter un article // ajouter de la sécurité (injection SQL) faire requête préparée
exports.addPost = async (req, res, next) => {
    //console.log(req.body.content)
    const posts = await sequelize.query(`INSERT INTO posts (content, userId, updatedAt) VALUES ("${req.body.content}", "${req.currentUser.id}", "${(new Date()).toISOString().slice(0, 19).replace('T', ' ')}")`, { type: QueryTypes.INSERT })
    res.status(200).json(posts)
}
// Modifier l'article // ajouter de la sécurité (injection SQL)
exports.updatePost = async (req, res, next) => {
    //console.log(req.body.content)
    const posts = await sequelize.query(`UPDATE posts SET content = "${req.body.content}" WHERE userId = "${req.currentUser.id}" AND id= "${req.params.id}" `, { type: QueryTypes.UPDATE })
    res.status(200).json(posts)
}
// Supprimer un article -- ajouter de la sécurité (injection SQL)
exports.deletePost = async (req, res, next) => {
    const posts = await 
    sequelize.query("DELETE FROM posts WHERE id=" + req.params.id, { type: QueryTypes.DELETE })
    res.status(200).json(posts)
}

// recupérer les articles 
exports.getPosts = async (req, res, next) => {
    const posts = await Post.findAll({
        include: [{
            model: Users
        }],
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
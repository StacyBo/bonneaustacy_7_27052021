const fs = require('fs');
const { QueryTypes } = require('sequelize');
const { post } = require('../app');
const { Comment: Comment, Post: Post, Users: Users, sequelize } = require("../models");
const { patch } = require('../routes/user');

// ajouter de la sécurité (injection SQL) faire requête préparée
exports.addPost = async (req, res, next) => {
    //console.log(req.body.content)
    const posts = await sequelize.query(`INSERT INTO posts (content, userId, updatedAt) VALUES ("${req.body.content}", "${req.currentUser.id}", "${(new Date()).toISOString().slice(0, 19).replace('T', ' ')}")`, { type: QueryTypes.INSERT })
    res.status(200).json(posts)
}
// ajouter de la sécurité (injection SQL)
exports.updatePost = async (req, res, next) => {
    // utiliser update
    console.log(req.body.content)
    const posts = await sequelize.query(`UPDATE posts SET content = "${req.body.content}" WHERE userId = "${req.currentUser.id}" AND id= "${req.params.id}" `, { type: QueryTypes.UPDATE })
    res.status(200).json(posts)
}
// ajouter de la sécurité (injection SQL)
exports.deletePost = async (req, res, next) => {
    const posts = await sequelize.query("DELETE FROM posts WHERE id=" + req.params.id, { type: QueryTypes.DELETE })
    res.status(200).json(posts)
}

exports.getPosts = async (req, res, next) => {
    const posts = await sequelize.query("select * from posts ORDER BY updatedAt DESC", { type: QueryTypes.SELECT })
    res.status(200).json(posts)
}

exports.getLastPosts = async (req, res, next) => {
    const posts = await sequelize.query("SELECT * FROM posts WHERE userId=?  ORDER BY updatedAt DESC  LIMIT 3", { replacements: [1], type: QueryTypes.SELECT })
        .then(post => res.status(200).json(post))
        .catch(error => res.status(404).json({ error }));
}

exports.getOnePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
        .then(post => res.status(200).json(post))
        .catch(error => res.status(404).json({ error }));
}
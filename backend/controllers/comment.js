const { Comment: Comment, Users: Users, sequelize } = require("../models");
const fs = require("fs");
const { QueryTypes } = require('sequelize');
const { patch } = require('../routes/user');


// ajouter de la sécurité (injection SQL) faire requête préparée
//ajouter un commentaire
exports.addComment = async (req, res, next) => {
    //console.log(req.body.content)
    let comment = {
        ...req.body.comment,
        userId: req.currentUser.id,
        postId: parseInt(req.params.postId),
        createdAt: new Date(),
        updatedAt: new Date()
    }
    //console.log(comment)
    Comment.create(comment)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur est survenue lors de l'enregistrement."
            });
        });
}

// récupérer les commentaires
exports.getComments = async (req, res, next) => {
    const comments = await sequelize.query("select * from comments WHERE postId=? ORDER BY updatedAt ASC" , { replacements: [req.params.postId], type: QueryTypes.SELECT })
    res.status(200).json(comments)
}

// supprimer un commentaire 
exports.deleteComment = async (req, res, next) => {
    const comments = await 
    sequelize.query("DELETE FROM comments WHERE id=" + req.params.id, { type: QueryTypes.DELETE })
    res.status(200).json(comments)
}
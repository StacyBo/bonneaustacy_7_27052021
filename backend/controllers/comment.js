const { Comment: Comment, Users: Users, sequelize } = require("../models");
const fs = require("fs");
const { QueryTypes } = require('sequelize');
const { patch } = require('../routes/user');

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
    const comments = await Comment.findAll({
        include: [{
            model: Users
        }],
        order: [
            ['updatedAt', 'ASC'],
        ],
        where: {
            postId: req.params.postId
        }
    });
    res.status(200).json(comments);

};

// modifier le commentaire
exports.updateComment = async (req, res, next) => {
    // L'admin peut modifier tous les commentaires
    const whereClause = { id: req.params.id }
    if (req.currentUser.isAdmin === false) {
        whereClause.userId = req.currentUser.id;
    }
    const comment = await Comment.findOne({ where: whereClause });
    if (!comment) {
        return res.status(404).json({ message: "Le commentaire n'existe pas" })
    }
    try {
        await comment.update({ content: req.body.comment.content });
        await comment.save();
        return res.status(200).json({ message: 'Commentaire modifié' });
    } catch (error) {
        return res.status(400).json({ error });
    }
};

// supprimer un commentaire 
exports.deleteComment = async (req, res, next) => {
    const comments = await
    sequelize.query("DELETE FROM comments WHERE id=?", { type: QueryTypes.DELETE, replacements: [req.params.id] })
    res.status(200).json(comments)
}
const { comment: comment} = require("../models");
const fs = require("fs");
const { QueryTypes } = require('sequelize');
const { patch } = require('../routes/user');


// ajouter de la sécurité (injection SQL) faire requête préparée
exports.addComment = async (req, res, next) => {
    //console.log(req.body.content)
    const comments = await sequelize.query(`INSERT INTO comments (content, userId, updatedAt) VALUES ("${req.body.content}", "${req.currentUser.id}", "${(new Date()).toISOString().slice(0, 19).replace('T', ' ')}")`, { type: QueryTypes.INSERT })
    res.status(200).json(comments)
}
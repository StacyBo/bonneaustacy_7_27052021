const {Comment: Comment, Users: Users} = require("../models");

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

exports.addComment = async (req, res, next) => {
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
};

exports.updateComment = async (req, res, next) => {
    // Moderator can update every posts
    const whereClause = {id: req.params.id}
    if (req.currentUser.isAdmin === false) {
        whereClause.userId = req.currentUser.id;
    }
    const comment = await Comment.findOne({ where: whereClause });
    if (!comment) {
        return res.status(404).json({message: "Le commentaire n'existe pas"})
    }
    try {
        await comment.update({ content: req.body.comment.content});
        await comment.save();
        return res.status(200).json({message: 'Commentaire modifié'});
    } catch (error) {
        return res.status(400).json({error});
    }
};

exports.deleteComment = async (req, res, next) => {
    // Moderator can delete every posts
    const whereClause = {id: req.params.id}
    if (req.currentUser.isAdmin === false) {
        whereClause.userId = req.currentUser.id;
    }
    const comment = await Comment.findOne({ where: whereClause });
    if (!comment) {
        return res.status(404).json({ error: 'Commentaire non trouvé' });
    }
    Comment.destroy({where: {id: req.params.id}})
        .then(() => res.status(200).json({message: "Commentaire supprimé"}))
        .catch((error) => res.status(400).json({error}));
};


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Users: Users, Post, sequelize} = require("../models");
const config = require('../config/index');
const fs = require("fs");
const {QueryTypes} = require("sequelize");


// creation d'un utilisateur
exports.postUser = async (req, res, next) => {

    const {firstName, lastName, email, password, isAdmin} = req.body;

    try {
        bcrypt.hash(password, 10)
            .then(async hash => {
                const users = await Users.create(
                    {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: hash,
                        isAdmin: isAdmin
                    }
                )
                return res.status(201).json({
                    userId: users.id
                });
            })
            .catch(error => res.status(500).json({ error }));

    } catch (err) {
        return res.status(500).json(err);
    }

};

// connexion d'un utilisateur
exports.login = async (req, res, next) => {
    const {email, password} = req.body;
    const user = await Users.findOne({ where: { email: email } });
    if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
    }
    bcrypt.compare(password, user.password)
        .then(valid => {
            if (!valid) {
                return res.status(401).json({error: 'Mot de passe incorrect !'});
            }
            res.status(200).json({
                user: user,
                token: jwt.sign(
                    { userId: user.id },
                    config.JWTSecret,
                    { expiresIn: '24h' }
                )
            });

        })
        .catch(error => res.status(500).json({ error }));
};

exports.auth = async (req, res, next) => {
    const {token} = req.body;
    try {
        var decodedToken = jwt.verify(token, config.JWTSecret);
        const userId = decodedToken.userId;
        const user = await Users.findOne({where: {id: userId}});
        if (!user) {
            return res.status(401).json({error: 'Utilisateur non trouvé !'});
        }
        return res.status(200).json(user);

    } catch(error) {
        return res.status(401).json(error);
    }
};

// supprimer un utilisateur
exports.deleteUser = async (req, res, next) => {
    Post.destroy({where: {userId: req.currentUser.id}})
        .then(() => {
            Users.destroy({where: {id: req.currentUser.id}})
                .then(() => {
                    res.status(200).json({success: true, message: "Utilisateur supprimé"})
                })
                .catch((error) => res.status(400).json({error}));
        })
        .catch((error) => res.status(400).json({error}));
};
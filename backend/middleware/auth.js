const jwt = require('jsonwebtoken');
const config = require('../config/index');
const {Users: Users} = require("../models");

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, config.JWTSecret);
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';
        } else {
            const user = await Users.findOne({where: {id: userId}});
            if (!user) {
                return res.status(401).json({error: 'Utilisateur non trouvé !'});
            }
            req.currentUser = user;
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};
const express = require('express');
const userRoutes = require('./routes/user')
const postRoutes = require('./routes/post')
const commentRoutes = require('./routes/comment')
const path = require('path');
const multer  = require('multer')


const {sequelize, Users} = require('./models');

// creation et configuration d'express
const app = express();


// CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Analyser le corps de la requete
app.use(express.json());

// Creer les tableaux s'ils n'existent pas déjà
sequelize.sync();

// gestion du stockage
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images')
    },
    // nommer le fichier de manière unique avec le suffixe date.now 
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

 multer({ storage: storage })

// Ajout des routes
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/', userRoutes);
app.use('/api/post/', postRoutes);
app.use('/api/comment/', commentRoutes);

module.exports = app;
const express = require('express');
const userRoutes = require('./routes/user')
const postRoutes = require('./routes/post')
const commentRoutes = require('./routes/comment')
const path = require('path');
const multer  = require('multer')

const app = express();
const {sequelize, Users} = require('./models');


// Cors middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Parse the body of the request
app.use(express.json());

// Create tables if they doesn't already exist
sequelize.sync();

// SET STORAGE
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

// Add routes
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/', userRoutes);
app.use('/api/post/', postRoutes);
app.use('/api/comment/', commentRoutes);

module.exports = app;
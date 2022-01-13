const express = require('express');
const userRoutes = require('./routes/users')
//const postRoutes = require('./routes/post')
const path = require('path');

const app = express();
const {sequelize, Users} = require('./models');


// Parse the body of the request
app.use(express.json());

// Cors middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Create tables if they doesn't already exist
sequelize.sync();

// Add routes
app.use('/api/', userRoutes);
//app.use('/api/posts', postRoutes);


module.exports = app;
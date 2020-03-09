const Sequelize = require('sequelize');
const connection = require('../database/db');

const User = connection.define('users',{
        nome:{
            type: Sequelize.STRING,
            allowNull: false
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false
        },
        password:{
            type:Sequelize.STRING,
            allowNull: false
        },
        avatar:{
            type: Sequelize.TEXT,
            allowNull: true
        }
})

User.sync({force:false});

module.exports = User;
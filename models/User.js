const Sequelize = require('sequelize');
const connection = require('../database/db');

const User = connection.define('users',{
        name:{
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
        }, 
        createdLinks:{
            type: Sequelize.INTEGER,
            allowNull: true
        },
        theme:{
            type: Sequelize.STRING,
            allowNull: true
        }
})

User.sync({force:false});

module.exports = User;
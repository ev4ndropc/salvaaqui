const Sequelize = require('sequelize');
const connection = require('../database/db');
const User = require('./User')

const Link = connection.define('links',{
        titulo:{
            type: Sequelize.STRING,
            allowNull: false
        },
        link:{
            type: Sequelize.STRING,
            allowNull: false
        },
        usuario:{
            type:Sequelize.STRING,
            allowNull: false
        }
})

Link.belongsTo(User);
User.hasMany(Link)

Link.sync({force:false});

module.exports = Link;
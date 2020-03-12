const Sequelize = require('sequelize');
const connection = require('../database/db');


const Comment = connection.define('comments',{
    name:{
      type: Sequelize.STRING,
      allowNull: false
    },
    title:{
      type: Sequelize.STRING,
      allowNull: false
    },
    msg:{
      type: Sequelize.TEXT,
      allowNull: false
    }
})

Comment.sync({force:false});
module.exports = Comment;
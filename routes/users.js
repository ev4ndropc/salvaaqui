const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Link = require('../models/Link')
const bcrypt = require('bcryptjs');
const connection = require('../database/db')
const adminAuth = require('../middlewares/adminAuth')



router.get('/dashboard', adminAuth, (req,res) =>{
  var sessionUser = req.session.user;

  User.findAndCountAll({

  }).then( users =>{

  Link.findAndCountAll({

  }).then( links =>{
      var totalLinks = users['rows'][0]['createdLinks']
      res.render('dashboard', {
        sessionUser,
        users: users,
        links: links,
        totalLinks
      })

    })
});
});


router.get('/profile', (req, res) =>{
  var sessionUser = req.session.user;

  User.findOne({
      where:{
        id: sessionUser.id
      }
  }).then( result =>{

      res.render('user/profile', {
          sessionUser,
          result: result
      })

  });

});

router.post('/profile/update', adminAuth, (req, res) =>{
  var sessionUser = req.session.user;
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({
    where:{
        email: email
    }
  }).then(usersFind =>{
    
    if(usersFind == undefined){
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    User.update({name: name, email: email, password: hash}, {
      where:{
          id: sessionUser.id
      }
    }).then(() =>{
        res.redirect("/profile")
    })
  }else{
    res.redirect("/dashboard")
  }

  })

})



router.get('/change-theme', (req, res) =>{
    if(req.session.user.theme == 'dark'){
      req.session.user.theme = 'light'
    }else{
      req.session.user.theme = 'dark'
    }
    res.redirect('/')
})

module.exports = router;

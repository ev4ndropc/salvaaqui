const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Link = require('../models/Link')
var adminAuth = require('../middlewares/adminAuth')



router.get('/links', adminAuth, (req,res) =>{
    var sessionUser = req.session.user;
    Link.findAll({
      where:{
        userId: sessionUser.id
      }
    }).then(links =>{
      res.render('links', {
        sessionUser,
        links: links
      })
    })

});

router.get('/links-all', adminAuth, (req,res) =>{
  var sessionUser = req.session.user;
  Link.findAll({

  }).then(linksAll =>{
    res.render('links-all', {
      sessionUser,
      links: linksAll
    })
  })

});

router.post('/add-link', (req,res) =>{
    var sessionUser = req.session.user;
    var title = req.body.title
    var link = req.body.link
    var id = req.body.id
    Link.create({
      include: [{
      model: User
      }],
      titulo: title,
      link: link,
      usuario: sessionUser.name,
      userId: sessionUser.id,
    }).then( result =>{
      res.redirect('/links')
    })

});

router.get('/remove-link/:id', (req,res) =>{
  var id = req.params.id
  Link.destroy({
    where:{
      id: id
    }
  }).then( result =>{
    res.redirect('/links')
  })

});

router.get('/edit-link', (req,res) =>{
  res.render('register')
});


module.exports = router;
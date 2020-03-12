const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment')

/* GET home page. */
router.get('/', function(req, res, next) {
  var sessionUser = req.session.user;
  if(!sessionUser){
      res.render('index')
  }else{
      res.redirect('/dashboard')
  }
});

router.post('/send-comment', (req, res) =>{
    var name = req.body.name;
    var title = req.body.title;
    var msg = req.body.msg
    if(!name || !title || !msg){
      res.redirect('/')
    }else{
    Comment.create({
      name,
      title,
      msg
      }).then( result =>{
        setTimeout(function(){
          res.redirect('/dashboard')
        },1000)

    })
  }

})

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var sessionUser = req.session.user;
  if(!sessionUser){
      res.render('index')
  }else{
      res.redirect('/dashboard')
  }
});

module.exports = router;

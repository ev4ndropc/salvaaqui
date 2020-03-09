const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
var adminAuth = require('../middlewares/adminAuth')



router.get('/dashboard', adminAuth, (req,res) =>{
    var sessionUser = req.session.user;
    res.render('dashboard', {
        sessionUser
    })

});


router.get('/register', (req,res) =>{
    res.render('register')
});

router.get('/recovery/password', (req, res) =>{
    res.render('recovery')
})

router.get('/login', (req,res) =>{
        res.render('index')
});

router.get('/logout', adminAuth, (req,res) =>{
    req.session.user = undefined;
    res.redirect('/')
});

router.get('/profile', (req,res) =>{
    var sessionUser = req.session.user;
    res.render('user/profile', {
        sessionUser
    })
});

router.post('/login', (req, res) =>{
    var email = req.body.email;
    var password = req.body.password;
    
    User.findOne({
        where:{
            email: email
        }
    }).then(user =>{
        if(user != undefined){

            var correct = bcrypt.compareSync(password, user.password);

            if(correct){
                req.session.user = {
                    id: user.id,
                    email: user.email,
                    name: user.nome,
                    avatar: user.avatar
                }
                res.redirect('/dashboard')
            }else{

            }

        }else{
            res.redirect('/erro')
        }
    })

});


router.post('/register', (req,res) =>{
    var nome = req.body.nome;
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({
        where:{
            email: email
        }
    }).then(user =>{
        if(user == undefined){

            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(password, salt);
        
            
            User.create({
                nome: nome,
                email: email,
                password: hash,
                avatar: 'defaultAvatar.png'
            }).then(() => {
                res.redirect('/');
            }).catch((err)=>{
                res.redirect('/');
            })

        }else{
            res.redirect('/')
        }
    })


});


module.exports = router;
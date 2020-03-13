const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
var adminAuth = require('../middlewares/adminAuth')





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


router.post('/login', (req, res) =>{
    var email = req.body.email;
    var password = req.body.password;
    var sessionUser = req.session.user
    var msgErro = 'Por favor, confira se o email e a senha estão corretos!'
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
                    name: user.name,
                    avatar: user.avatar,
                    theme: user.theme

                }
                res.redirect('/dashboard')
            }else{
                res.redirect('/')
            }

        }else{
            res.redirect('/erro')
        }
    })

});

router.post('/register', (req,res) =>{
    var name = req.body.nome;
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
                name: name,
                email: email,
                password: hash,
                avatar: 'defaultAvatar.png',
                createdLinks: 0,
                theme: 'light'
            }).then(() => {
                res.redirect('/');
            }).catch((err)=>{
                res.redirect('/');
            })

        }else{
            res.render('register',{
                msgErro: 'Já existe um usuário cadastrado com o email informado'
            })
        }
    })


});


module.exports = router;

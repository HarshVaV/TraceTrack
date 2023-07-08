const express = require('express');
const router = express.Router();
const User = require('../Models/user');
const passport = require('passport');

router.get('/register', (req, res) => {
  res.render('users/register');
});

router.post('/register', async (req, res) => {
    const { email, username, password } = req.body;
    console.log(req.body);
    if (!password) {
        req.flash('error', 'Password is required');
        console.log(' no password');
        return res.redirect('/register');
    }
    try {
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.flash('success', 'Registration successful. You can now log in.');
        console.log('Successfully registered');
        res.redirect('/login');
      }
      catch (error) {
        req.flash('error', 'Error registering user');
        console.log(error);
        res.redirect('/register');
      }
    });
  

router.get('/login', (req, res) => {
  res.render('users/login');
});

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login', }), (req, res) => {
    req.flash('success', 'welcome back!');
    console.log('Successfully logged in');
    res.redirect('/');
});

module.exports = router;

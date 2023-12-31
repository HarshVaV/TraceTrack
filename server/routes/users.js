const express = require('express');
const router = express.Router();
const User = require('../Models/user');
const passport = require('passport');
const { isLoggedIn } = require("../middleware/index"); // Require the middleware file

router.get('/register', (req, res) => {
  res.render('users/register');
});

router.post('/register', async (req, res, next) => {
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
    req.login(registeredUser, err => {  // It takes the registered user object and logs them in by serializing their information into the session. NO need to login manually.
      if (err) return next(err);
      req.flash('success', 'Registration successful.');
      console.log('Successfully registered');
      res.redirect('/police');
    })
  }
  catch (error) {
    req.flash('error', 'Error registering user');
    console.log(error);
    res.redirect('/register');
  }
});


router.get('/login', (req, res) => {
  res.render('users/auth');
});

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login', }), (req, res) => {
  req.flash('success', 'welcome back!');
  console.log('Successfully logged in');
  const redirectUrl = req.session.returnTo || '/police/';
  console.log(redirectUrl);
  //delete req.session.returnTo;
  res.redirect(redirectUrl);
});

router.get('/logout', isLoggedIn, (req, res, next) => {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/');
    req.flash('success', "GoodBye!");
    console.log("logged out!");
  });
});

module.exports = router;

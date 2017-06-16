const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', (req, res) => {
  req.checkBody('name', 'You must enter a name.').notEmpty();
  req.checkBody('email', 'You must enter a email.').notEmpty();
  req.checkBody('username', 'You must enter a username.').notEmpty();
  req.checkBody('password', 'You must enter a password.').notEmpty();
  console.log(req.body)
  const errors = req.validationErrors();
  if (errors) {
    res.render('register', { errors });
  } else {
    const user = new User();
    Object.assign(user, req.body);
    user.save((err) => {
      if (err) console.log(err);
      req.flash('success', 'Registration Successful');
      res.redirect('/');
    });
  }
});

module.exports = router;

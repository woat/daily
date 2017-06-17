const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', (req, res) => {
  req.checkBody({
    name: {
      notEmpty: { errorMessage: 'You must enter a name.' },
    },
    email: {
      isEmail: { errorMessage: 'Invalid Email, please use a different address.' },
      notEmpty: { errorMessage: 'You must enter an email.' },
    },
    username: {
      notEmpty: { errorMessage: 'You must enter a username.' },
    },
    password: {
      notEmpty: { errorMessage: 'You must enter a password.' },
    },
    passwordCheck: {
      equals: { options: req.body.password, errorMessage: 'Passwords do not match' },
      notEmpty: { errorMessage: 'Passwords do not match.' },
    },
  });
  req.getValidationResult().then((result) => {
    if (!result.isEmpty()) return res.render('register', { errors: result.array() });
    const user = new User();
    Object.assign(user, req.body);
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.send(err);
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return res.send(err);
        user.password = hash;
        user.save((err) => {
          if (err) return res.send(err);
          req.flash('success', 'Registration Successful');
          res.redirect('/users/login');
        });
      });
    });
  });
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;

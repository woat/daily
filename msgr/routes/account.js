const express = require('express');

const RegisterUser = require('../models/register');

const router = express.Router();

router.get('/login', (req, res) => {
  res.render('./account/login');
});

router.get('/register', (req, res) => {
  res.render('./account/register');
});

router.post('/register', (req, res) => {
  const newUser = new RegisterUser();
  Object.assign(newUser, req.body);
  newUser.save();
  res.send('success');
});

module.exports = router;

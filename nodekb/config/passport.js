const LocalStrategy = require('passport-local').strategy;
const User = require('../models/user');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

module.exports = (passport) => {
  // Local Strategy
  passport.use(new LocalStrategy((username, password, done) => {
    const query = { username };
    user.findOne(query, (err, user) => {
      if (err) return throw error
    })
  }))
};

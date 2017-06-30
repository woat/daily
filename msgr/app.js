const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');

// require routes
const account = require('./routes/account');

const app = express();

mongoose.connect('mongodb://localhost/msgr');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use routes
app.use('/account', account);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
}));

app.use(flash());
app.use((req, res, next) => {
  res.locals.messsages = require('express-messages')(req, res);
  next();
});

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => console.log('We are live at port 3000'));

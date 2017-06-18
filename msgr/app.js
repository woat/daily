const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => console.log('We are live at port 3000'));

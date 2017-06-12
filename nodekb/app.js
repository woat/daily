const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodekb');
const db = mongoose.connection;

db.once('open', () => console.log('connected to mongodb'));
db.on('error', err => console.log(err));

const app = express();

const Article = require('./models/article');

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', (req, res) => {
  Article.find({}, (err, articles) => {
    if (err) console.log(err);
    res.render('index', {
      title: 'Articles',
      articles,
    });
  });
});

// Add Route
app.get('/articles/add', (req, res) => {
  res.render('add_article', {
    title: 'Article'
  });
});

app.listen(3000, () => console.log('server success @ 3000'));

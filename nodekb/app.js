const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/nodekb');
const db = mongoose.connection;

db.once('open', () => console.log('connected to mongodb'));
db.on('error', err => console.log(err));

const app = express();

const Article = require('./models/article');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

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
    title: 'Article',
  });
});

app.get('/articles/:id', (req, res) => {
  Article.findOne({ _id: req.params.id }, (err, article) => {
    res.render('article_page', {
      article,
    });
  });
});

// Add Submit POST Route
app.post('/articles/add', (req, res) => {
  const article = new Article();
  article.title = req.body.title;
  article.author = req.body.author;
  article.body = req.body.body;
  article.save((err) => {
    if (err) console.log(err);
    res.redirect('/');
  });
});

app.listen(3000, () => console.log('server success @ 3000'));

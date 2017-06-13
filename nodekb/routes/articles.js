const express = require('express');
const router = express.Router();
const Article = require('../models/article');

// Home Route
router.get('/', (req, res) => {
  Article.find({}, (err, articles) => {
    if (err) console.log(err);
    res.render('index', {
      title: 'Articles',
      articles,
    });
  });
});

// Add Route
router.get('/add', (req, res) => {
  res.render('add_article', {
    title: 'Article',
  });
});

// Get Edit Article
router.get('/edit/:id', (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    res.render('edit_article', {
      title: 'Edit Article',
      article,
    });
  });
});

// Put Edit Article
router.put('/edit/:id', (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    Object.assign(article, req.body);
    article.save((error) => {
      if (error) console.log(error);
      res.redirect('/');
    });
  });
});

// Get Single Article
router.get('/:id', (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    res.render('article_page', {
      article,
    });
  });
});

// Add Submit POST Route
router.post('/add', (req, res) => {
  const article = new Article();
  article.title = req.body.title;
  article.author = req.body.author;
  article.body = req.body.body;
  article.save((err) => {
    if (err) console.log(err);
    res.redirect('/');
  });
});

module.exports = router;

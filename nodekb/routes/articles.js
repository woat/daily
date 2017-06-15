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
      req.flash('info', 'Article Saved');
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

// Delete Single Article
router.delete('/:id', (req, res) => {
  Article.findByIdAndRemove(req.params.id, (err) => {
    if (err) console.log(err);
    res.send('Deleted sucess');
  });
});

// Add Submit POST Route
router.post('/add', (req, res) => {
  req.checkBody('title', 'You must enter a title.').notEmpty();
  req.checkBody('author', 'You must enter a author.').notEmpty();
  req.checkBody('body', 'You must enter a body.').notEmpty();
  const errors = req.validationErrors();
  if (errors) {
    res.render('add_article', { errors });
  } else {
    const article = new Article();
    article.title = req.body.title;
    article.author = req.body.author;
    article.body = req.body.body;
    article.save((err) => {
      if (err) console.log(err);
      req.flash('success', 'Article Added');
      res.redirect('/');
    });
  }
});

module.exports = router;

const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const articles = require('./routes/articles');
const Article = require('./models/article');

mongoose.connect('mongodb://localhost/nodekb');
const db = mongoose.connection;

db.once('open', () => console.log('connected to mongodb'));
db.on('error', err => console.log(err));

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/articles', articles);

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  Article.find({}, (err, articles) => {
    if (err) console.log(err);
    res.render('index', {
      title: 'Articles',
      articles,
    });
  });
});

app.listen(3000, () => console.log('server success @ 3000'));

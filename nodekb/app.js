const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const articles = require('./routes/articles');
const users = require('./routes/users');
const Article = require('./models/article');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const expressMessages = require('express-messages');

mongoose.connect('mongodb://localhost/nodekb');
const db = mongoose.connection;

db.once('open', () => console.log('connected to mongodb'));
db.on('error', err => console.log(err));

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUnintialized: true,
}));
app.use(flash());
app.use((req, res, next) => {
  res.locals.messages = expressMessages(req, res);
  next();
});
app.use(expressValidator({
  errorFormatter: (param, msg, value) => {
    const namespace = param.split('.');
    const root = namespace.shift();
    let formParam = root;

    while (namespace.length) {
      formParam += `[ ${namespace.shift()} ]`;
    }

    return {
      param: formParam,
      msg,
      value,
    };
  },
}));

// Load Routes
app.use('/articles', articles);
app.use('/users', users);

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

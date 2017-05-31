const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use('/assets', express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/person/:id', (req, res) => {
  res.render('person', { ID: req.params.id });
});

app.listen(port);

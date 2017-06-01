const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

app.use('/assets', express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/person/:id', (req, res) => {
  res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
});

app.post('/person', urlencodedParser, (req, res) => {
  res.send('Thank you.');
});

app.post('/api/person', jsonParser, (req, res) => {
  res.send('Thank you.');
});

app.get('/api/person/:id', () => {

});

app.delete('/api/person/:id', () => {

});

app.listen(port);

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const url = 'mongodb://admin:admin@ds161121.mlab.com:61121/my-star-wars-quotes';
let db;

MongoClient.connect(url, (err, database) => {
  if (err) return console.error(err);
  db = database;
  app.listen(3000, () => {
    console.log('listening on 3000');
  });
});


app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

app.get('/', (req, res) => {
  const cursor = db.collection('quotes').find().toArray((err, results) => {
    if (err) return console.error(err);
    res.render('index', { quotes: results });
  });
});

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.error(err);

    console.log('saved to database success');
    res.redirect('/');
  });
});

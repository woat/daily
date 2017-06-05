const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
// don't steal my keys please :(
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
app.use(bodyParser.json());
app.use(express.static('public'));

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

app.put('/quotes', (req, res) => {
  db.collection('quotes')
    .findOneAndUpdate({ name: 'yoda' }, {
      $set: {
        name: req.body.name, quote: req.body.quote,
      },
    }, {
      sort: { _id: -1 },
      upsert: true,
    }, (err, result) => {
      if (err) return res.send(err);
      res.send(result);
    });
});

app.delete('/quotes', (req, res) => {
  db.collection('quotes').findOneAndDelete({ name: req.body.name },
    (err, result) => {
      if (err) return res.send(500, err);
      res.send({ message: 'A Darth Vader quote has been purged.' });
    });
});

const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/thelist', (req, res, next) => {
  const MongoClient = mongodb.MongoClient;
  const url = 'mongodb://localhost:27017/sampsite';

  MongoClient.connect(url, (err, db) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Connection Established');
      const collection = db.collection('students');

      collection.find({}).toArray((err, result) => {
        if (err) {
          res.send(err);
        } else if (result.length) {
          res.render('studentlist', { studentlist: result });
        } else {
          res.send('No documents found');
        }

        db.close();
      });
    }
  });
});

router.get('/newstudent', (req, res) => {
  res.render('newstudent', { title: 'Add Student' });
});

module.exports = router;

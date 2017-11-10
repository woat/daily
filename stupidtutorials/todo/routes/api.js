const express = require('express');
const Todo = require('../models/todos');

const router = express.Router();

router.get('/todos', (req, res) => {
  Todo
    .find()
    .then(data => res.send(data));
});

router.post('/todos', (req, res) => {
  Todo
    .create(req.body)
    .then(todos => res.send(todos));
});

router.put('/todos/:id', (req, res) => {
  Todo.findOne({ _id: req.params.id }, (err, doc) => {
    if (err) res.send(err);
    doc.title = req.body.title;
    doc.contents = req.body.contents;
    doc.save();
    res.send('Put success');
  });
});

router.delete('/todos/:id', (req, res) => {
  Todo
    .findByIdAndRemove(req.params.id, (err) => {
      if (err) console.log(err);
      res.send('Deleted successfully');
    });
});

module.exports = router;

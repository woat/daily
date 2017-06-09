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

module.exports = router;

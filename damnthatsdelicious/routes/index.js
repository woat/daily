const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works!');
});

router.get('/reverse/:owo', (req, res) => {
  const name = req.params.owo;
  res.send(name.split('').reverse().join(''));
})

module.exports = router;

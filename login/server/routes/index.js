var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  // On a get request, send data back using JSON with res.send
  res.send({
    msg: 'New data from express',
  })
})

router.post('/post', (req, res) => {
  // On a post request, use req.body to access the data from Vue
  res.send(req.body);
})

module.exports = router;

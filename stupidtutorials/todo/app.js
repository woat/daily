const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const api = require('./routes/api');

const app = express();

mongoose.connect('mongodb://localhost/todoapp');
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/api', api);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3500, () => {
  console.log('We are now live at port 3500');
});

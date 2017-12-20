require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

const { mongoose } = require('./db/mongoose');
// const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/users', (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  })

  user
    .save()
    .then(() => {
      return user.generateAuthToken();
    })
    .then((token) => {
      res.header('x-auth', token).send(user)
    })
    .catch(err => console.log('ERROR MY GUY' + err))
})

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};

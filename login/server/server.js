require('./config/config');

const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const { ObjectID } = require('mongodb');
const { mongoose } = require('./db/mongoose')

const app = express()
const port = process.env.PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes)

app.listen(port, () => {
  console.log(`Started up at port ${port}`)
});

module.exports = { app }

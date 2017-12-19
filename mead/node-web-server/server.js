const express = require('express')

const app = express()

app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
  const now = new Date().toString()
  console.log(`${now}: ${req.method} ${req.path}`)
  next()
})

const maitenence = true

if (maitenence) {
  app.use((req, res) => {
    res.send('We are under maitenence')
  })
}

app.get('/', (req, res) => {
  res.send('<h1>Hello Express!<h1/>')
})

app.listen(3000, () => {
  console.log('server is up on port 3000')
})

const { MongoClient, ObjectId } = require('mongodb')

const objId = new ObjectId()
console.log(objId)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) return console.log('Unable to connect to MongoDB server')

  console.log('Connected to MongoDB server')

  // db.collection is deprecated, hotfix here
  const myDb = db.db('TodoApp')

  myDb.collection('Users').insertOne({
    name: 'Something to do',
    age: '20',
    location: 'NY'
  }, (error, result) => {
    if (error) return console.log('Unable to insert todo', err)
    console.log(JSON.stringify(result.ops, undefined, 2))
  })

  db.close()
})

const { MongoClient, ObjectId } = require('mongodb')

const objId = new ObjectId()
console.log(objId)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) return console.log('Unable to connect to MongoDB server')

  console.log('Connected to MongoDB server')

  // db.collection is deprecated, hotfix here
  const myDb = db.db('TodoApp')

  myDb.collection('Todos').find().toArray.then((docs) => {
    console.log('Todos')
    console.log(JSON.stringify(docs, undefined, 2))
  }, (error) => {
    console.log(error)
  })

  // db.close()
})

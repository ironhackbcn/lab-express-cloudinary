const mongoose = require('mongoose')
const Post = require('../models/post')



const dbName = 'express-cloudinary'
mongoose.connect(`mongodb://localhost/${dbName}`, {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const array = [
  {
    title: 'post 1',
    description: 'bla bla'
  },
  {
    title: 'post 2',
    description: 'bla bla 2'
  },
  {
    title: 'post 3',
    description: 'bla bla 3'
  }
]

Post.create(array, (err)=> {
  if (err) throw(err)
  console.log(`Populated the db with ${array.length} elements`);
  mongoose.connection.close()
})
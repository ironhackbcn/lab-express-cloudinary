const mongoose = require('mongoose');

const Post = require('../models/post');
const dbName = "cloudinary";
mongoose.connect(`mongodb://localhost/${dbName}`);

const postSeed = [
  {
    title: 'Hollidays',
    description: 'Dream vacation'
  },
  {
    title: 'C my food',
    description: 'Marvelous dish'
  },
  {
    title: 'Catnicorn',
    description: 'I found a catnicorn!'
  }
];


Post.create(postSeed, (err) => {
  if(err) {throw (err)}
  console.log(`Created ${postSeed.length} posts`);
  mongoose.connection.close();
});
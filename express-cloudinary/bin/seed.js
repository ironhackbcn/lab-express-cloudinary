const mongoose = require('mongoose');
const Post = require('../models/post');

const dbName = 'cloudinary';
mongoose.connect(`mongodb://localhost/${dbName}`);

const posts = [
  {
  title: "My first post",
  description: "She sells seashells by the seashore"
  }
];

Post.create(posts, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${posts.length} posts`)
  mongoose.connection.close();
});
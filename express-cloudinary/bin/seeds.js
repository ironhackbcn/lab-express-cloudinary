const mongoose = require('mongoose');
const Post = require('../models/post');

const dbName = 'images-cloudinary';
mongoose.connect(`mongodb://localhost/${dbName}`);

const posts = [
  {
    title: 'dunno 1',
    description: 'desc 1'
  },
  {
    title: 'dunno 2',
    description: 'desc 2'
  },
  {
    title: 'dunno 3',
    description: 'desc 3'
  }
]

Post.create(posts, (err)=> {
  if (err){throw(err)}
  console.log(`Created ${posts.length} posts`)
  mongoose.connection.close();
  });
  
'use strict';

const mongoose = require('mongoose');
const Post = require('../models/post');

const dbName = 'messages';
mongoose.connect(`mongodb://localhost/${dbName}`);

const posts = [
  {
    title: 'What I did today',
    description: 'Learnt about authentication and authorisation'
  },
  {
    title: 'Also learnt about...',
    description: 'How to use Git when collaborating on projects'
  },
  {
    title: 'As well as...',
    description: 'How sessions and cookies are handled by Mongoose/Mongo and Express'
  }
]

Post.create(posts, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${posts.length} posts`)
  mongoose.connection.close();
});
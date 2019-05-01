const mongoose = require('mongoose');
const Post = require('../models/post');

mongoose.connect('mongodb://localhost/posts');

const postArray = [
  {
    title: 'Post 1',
    description: 'This is the description of the 1st post'
  },
  {
    title: 'Post 2',
    description: 'This is the description of the 2nd post'
  },
  {
    title: 'Post 3',
    description: 'This is the description of the 3th post'
  }
];

Post.create(postArray)
  .then( () => console.log('Elements inserted correctly'))
  .catch( (err) => console.log(err));
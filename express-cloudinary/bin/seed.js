const mongoose = require('mongoose');
const Post = require('../models/Post');


const dbName = 'posts';
mongoose.connect(`mongodb://localhost/${dbName}`);


const posts = [
  {
    title : "Fashion",
    description: "I like fashion",
  },
  {
    title : "Travels",
    description: "I like to travel",
  },
  {
    title : "Dogs",
    description: "I like dogs",
  }];

  Post.create(posts, (err)=>{
    if (err){throw(err)}
    console.log(`Created ${posts.length}posts`)
    mongoose.connection.close();
  })
const mongoose = require('mongoose');
const Post = require('../models/post');
const dbName = "cloudinary-posts";

mongoose.connect(`mongodb://localhost/${dbName}`);

const posts = [
  {
    title: "Wow! A cucumber!",
    description: "A wonderful green cucumber"
  },
  { 
    title: "Oh my! A pumpkin!",
    description: "A stunning, orange pumpkin"
  },
  { 
    title: "Holy moly! A watermelon!",
    description: "WATERMELONS ARE TECHNICALLY VEGETABLES"
  }
];

Post.create(posts, (err) => {
  if(err) {throw (err)}
  console.log(`Created ${posts.length} posts`);
  mongoose.connection.close();
});
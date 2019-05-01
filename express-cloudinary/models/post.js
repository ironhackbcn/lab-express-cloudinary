const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postModel = new Schema ({
  title: String,
  description: String
})

const Post = mongoose.model("Post", postModel);
module.exports = Post;
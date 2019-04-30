const mongoose = require("mongoose");

const postSchema = require('../model/schema/postSchema');
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
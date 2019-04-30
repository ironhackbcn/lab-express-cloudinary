'use strict'

const express = require("express");
const router = express.Router();
const Post = require('./../models/post');
const parser = require('./../config/cloudinary')

/* GET posts/new */
router.get('/new', (req, res, next) => {
  res.render('posts/new');
})

/* POST posts */
router.post('/', parser.single("image"), (req, res, next) => {
  console.log(req.file.secure_url);
  const imageUrl = req.file.secure_url;
  const { title, description } = req.body;
  const newPost = new Post({ title, description, imageUrl });
 
  newPost.save()
    .then(() => res.redirect('/posts'))
    .catch(() => res.render('posts/new'));
})

/* GET posts */
router.get('/', (req, res, next) => {
  Post.find({})
  .then((posts) => res.render('posts/index', { posts }))
  .catch((err) => console.log(err))
})

module.exports = router;
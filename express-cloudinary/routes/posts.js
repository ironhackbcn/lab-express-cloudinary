'use strict'

const express = require("express");
const router = express.Router();
const Post = require('./../models/post');

/* GET posts */
router.get('/', (req, res, next) => {
  Post.find({})
  .then((posts) => res.render('posts/index', { posts }))
  .catch((err) => console.log(err))
})

module.exports = router;
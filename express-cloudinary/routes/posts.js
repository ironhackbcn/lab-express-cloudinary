var express = require('express');
var router = express.Router();
const Post = require('./../models/post');


// GET '/posts'
router.get('/', (req, res, next) => {
  console.log("hola");
  Post.find()
    .then((posts) => {
      res.render('posts/index', {posts});
    })
    .catch( (err) => console.log(err));
});





module.exports = router;


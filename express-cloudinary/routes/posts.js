const express = require('express');
const router = express.Router();
const Post = require('../models/post');

/************ SEE ALL POSTS ************/

router.get('/', (req, res, next) => {
  Post.find({})
    .then(allPostsFromDb => res.render('posts/index', {allPostsFromDb})) 
    // .then(() => console.log("success!!!!!"))
    .catch(error => console.log(error))
});

/************ GET FORM TO ADD NEW POST ************/

router.get('/new', (req, res, next) => {
  res.render('posts/new');
})

/******************  ADD NEW POST ******************/

router.post('/', (req, res, next) => {
  const {title, description, imageUrl} = req.body;
  const newPost = new Post({title, description, imageUrl});
  newPost.save()
    .then(() => {res.redirect('/posts')})
    .catch(() => {res.render('posts/new')})
})




module.exports = router;
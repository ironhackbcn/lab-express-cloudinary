const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// GET Method - posts listing
router.get('/', (req, res, next) => {
  Post.find({})
    .then((allPostsFromDB) => res.render('posts/index', {allPostsFromDB}))
    .catch((error) => {console.log(error)});
});

// NEW posts
router.get('/new', (req, res, next) =>{
  res.render("posts/new");
});

router.post('/posts', (req, res, next) => {
  const postTitle = req.body.title;
  const postDescription = req.body.description;

  if (postTitle !== "" && postDescription !==""){
    Post.create({postTitle, postDescription})
      .then(()=> res.redirect('/'))
      .catch(()=> console.log('Something went wrong'));
  }

});


module.exports = router;

const express = require('express');
const router = express.Router();
const Post= require('../model/PostModel');


// New
router.get('/new', (req, res, next) => {
   res.render('posts/new');   
});

// POST post
router.post('/',(req,res,next)=>{
  const {title, description}= req.body; 

  newPost.save()
   .then(()=> res.redirection('/posts'))
   .catch(()=> res.render('posts/new'));
})


// GET '/post'
router.get('/', (req, res, next) => {
    Post.find({})
      .then( (posts) => res.render('posts/index', {posts} ))
      .catch( (err) => next(err) );
  });
  
module.exports = router;
var express = require('express');
var router = express.Router();
const Post = require('./../models/post');



//GET '/posts/new'
router.get('/new', (req, res, next) => {
  res.render('posts/new');
});


//POST '/posts'
router.post('/', (req, res, next) => {
  const {title, description} = req.body;
  
  newPost = new Post({title, description});

  newPost.save()
    .then( (res) => res.redirect('/posts'))
    .catch( (res) => res.render('posts/new',{messageError:'There is a problem with the insertion'}));
  
});




// GET '/posts'
router.get('/', (req, res, next) => {

  Post.find()
    .then((posts) => {
      res.render('posts/index', {posts});
    })
    .catch( (err) => console.log(err));
});





module.exports = router;


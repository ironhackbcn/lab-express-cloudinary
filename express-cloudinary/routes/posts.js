const express = require('express');
const router = express.Router();
const Post = require('./../models/post');

const parser = require('./../config/cloudinary');

//GET '/posts'
router.get('/', (req, res, next) => {
  Post.find()
    .then(allThePosts => res.render('posts/index', { allThePosts }))
    .catch(err => console.log(err));
});


//GET 'posts/new'
router.get('/new', function(req, res, next) {
  res.render('posts/new');
});

//Post '/posts/new'
router.post('/new', parser.single('image'), function(req, res, next) {
  console.log('req.body', req.body);
  const { title, description } = req.body;

  const imageUrl = req.file.secure_url;
  console.log('image', imageUrl);

  const newPost = new Post({ title, description, imageUrl });
  newPost
    .save()
    .then(book => res.redirect('/posts'))
    .catch(err => console.log(err));
});

module.exports = router;

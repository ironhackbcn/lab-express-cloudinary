var express = require('express');
var router = express.Router();
const Post = require('./../models/post')
var cloudinary = require('./../config/cloudinary');

router.get('/', (req, res, next) => {
  Post.find({})
    .then( (allPostsFromDB) => res.render('posts', {allPostsFromDB} ))
    .catch( (err) => console.log(err));
});

router.get('/new', (req, res, next) => {
  res.render('posts/new');
});

router.post('/add', cloudinary.single("image"), (req, res, next) => {
  //console.log(req.file) // to see what is returned to you
  const image = {};
  image.url = req.file.url;
  // image.id = req.file.public_id;
  // console.log('Image url ->',image.url)
  const { title , description } = req.body;
  // console.log( { title , description } )
  const newPost = new Post({ title , description, image : image.url });
  newPost.save()
    .then( (post) => res.redirect('/posts'))
    .catch( (err) => console.log(err));
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('posts');
});

module.exports = router;

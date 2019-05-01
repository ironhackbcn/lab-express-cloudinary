const express = require('express');
const router = express.Router();
const Post = require('../models/post')
const cloudinary = require('./../config/cloudinary')


router.get('/new', (req, res, next) => {
  console.log('fsd');
  res.render('posts/new')
})

router.post('/new', (req, res, next) => {
  const {title, description, image} = req.body
  console.log(req.body);
  
  const newPost = new Post({title, description, image})
  console.log(newPost.image);
  cloudinary.v2.uploader.unsigned_upload(image)

  newPost.save()
    .then(() => res.redirect('/post'))
    .catch(() => res.render('posts/new'))
})


router.get('/add', cloudinary.single('image', (req, res, next) => {
  const image = {}
  image.url = req.file.url
}))

router.get('/', (req, res, next) => {
  Post.find({})
    .then((post)=> res.render('posts/index.hbs', {post}))
    .catch((err)=> {throw(err)})
});

module.exports = router
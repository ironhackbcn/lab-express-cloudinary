const express = require('express');
const router = express.Router();
const Post = require('../models/post')
const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");


cloudinary.config({
  cloud_name: 'jimmy3484353539',
  api_key: '162312426217164',
  api_secret: 'MptSiqnAaR2DCeWHdc0YB1TjJ_o'
  });


const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "config",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }]
  });

const parser = multer({ storage: storage });

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

router.get('/', (req, res, next) => {
  Post.find({})
    .then((post)=> res.render('posts/index.hbs', {post}))
    .catch((err)=> {throw(err)})
});

module.exports = router
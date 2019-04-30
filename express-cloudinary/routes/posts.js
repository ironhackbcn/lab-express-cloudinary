const express = require("express");
const router = express.Router();

const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

const Post = require("./../models/post");


const CLOUD_NAME = 'screeeen';
const API_KEY = '819378991263422';
const API_SECRET = 'mRuRVEH_mhZrvUGGtNeeC-zVJfs';


cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
  });
  const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "demo",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }]
  });

  const parser = multer({ storage: storage });


//GET '/posts'
router.get('/', (req,res,next)=>{
Post.find()
.then(allThePosts=> res.render('posts/index',{allThePosts}))
.catch(err => console.log(err));
});

//GET '/post'
router.get('/post');


//GET 'posts/new'
router.get("/new", function(req, res, next) {
  res.render('posts/new');
});

//Post '/posts/new'
router.post("/new",parser.single("image"), function(req, res, next) {
  console.log("req.body", req.body); 
  const { title, description,imageUrl } = req.body;
  const image = {};
  image.url = req.file.url;
  image.id = req.file.public_id;
  console.log("image", image.url);
  
  const newPost = new Post({ title, description,imageUrl }); 
  newPost
    .save()
    .then(book => res.redirect('/posts'))
    .catch(err => console.log(err));
});

module.exports = router;
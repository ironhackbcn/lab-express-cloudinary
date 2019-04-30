var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Post = require(`./../models/Post`);
var cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

cloudinary.config({
  cloud_name: "dixceyrqu",
  api_key: "481138563638758",
  api_secret: "BPULJ7E0ty9uYbDhsZZYJP9uNFk"
  });


  const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "posts",
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
    });
 
var parser = multer({ storage: storage });



router.get('/new', (req, res) => {
  console.log("test")
  res.render('posts/new');
});

router.get(`/`, (req,res,next) => {
  console.log('hey')
  Post.find({})
    .then((post) => {
      console.log(post)
      res.render('posts/index', {post});
    })
    .catch((err) => console.log(err));
})





// router.post(`/new`, (req, res) => {
//   const { title, description } = req.body;
//   const newPost = new Post({title, description});
//   newPost.save()
//   .then(() => {
//     res.redirect('/posts'); //from the homeroute
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// });


router.post('/new', parser.single("image"), (req, res) => {
  console.log(req.file) // to see what is returned to you
  const imageLink = req.file.url;
  const {title, description} = req.body
  const newPost = new Post({ title, description, imageLink });
  
  newPost.save()
  .then(() => {
    res.redirect('/posts'); //from the homeroute
  })
  .catch((error) => {
    console.log(error);
  });
})



module.exports = router;
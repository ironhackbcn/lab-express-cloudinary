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

// router.get('/', (req, res, next) => {
//   Post.find({})
//     .then((posts) => res.render('posts/index', {posts}))
//     .catch((error) => {console.log(error)});
// });


module.exports = router;
var express = require("express");
var router = express.Router();

const Post = require("./../models/post");

//GET '/posts'
router.get('/', (req,res,next)=>{
Post.find()
.then(allThePosts=> res.render('posts/index',{allThePosts}))
.catch(err => console.log(err));
});

//GET '/post'
router.get('/post');

module.exports = router;
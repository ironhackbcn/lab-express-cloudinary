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


//GET 'posts/add'
router.get("/new", function(req, res, next) {
  res.render('posts/new');
});

//Post '/books/add'
router.post("/new", function(req, res, next) {
  console.log("req.body", req.body); 
  const { title, description } = req.body;

  const newPost = new Post({ title, description }); 
  newPost
    .save()
    .then(book => res.redirect('/posts'))
    .catch(err => console.log(err));
});

module.exports = router;
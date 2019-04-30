var express = require('express');
var router = express.Router();
const Post= require('../model/PostModel');

// GET '/post'
router.get('/', (req, res, next) => {
    Post.find({})
      .then( (allThePostFromDB) => res.render('post', {allThePostFromDB} ))
      .catch( (err) => next(err) );
  });
  
module.exports = router;
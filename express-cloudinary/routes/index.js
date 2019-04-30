var express = require('express');
var router = express.Router();

const postsRouter = require('./posts');

// * '/posts'
router.use('/posts', postsRouter);




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

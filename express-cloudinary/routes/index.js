var express = require('express');
var router = express.Router();

const postRouter = require('./posts')

//post

router.use('/posts', postRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cloudinary' });
});

module.exports = router;

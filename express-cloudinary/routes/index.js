var express = require('express');
var router = express.Router();
const postRouter = require('./posts');
router.use('/posts', postRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

const express = require('express');
const router = express.Router();

const postsRouter = require('./posts');

router.use('/posts', postsRouter);
router.use('/new', postsRouter);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

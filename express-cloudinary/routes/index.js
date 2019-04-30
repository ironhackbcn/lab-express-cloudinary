const express = require('express');
const router = express.Router();
const postRouter = require('./post');

//  * '/post'
router.use('/post', postRouter);

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

module.exports = router;

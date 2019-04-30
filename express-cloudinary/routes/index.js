'use strict'

const express = require('express');
const router = express.Router();
const postsRouter = require('./posts');

/* GET posts */
router.use('/posts', postsRouter);

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Messages' });
});

module.exports = router;

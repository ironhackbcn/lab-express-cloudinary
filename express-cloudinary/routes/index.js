'use strict'
const express = require('express');
const router = express.Router();
const postRouter = require('./post')


router.use('/post', postRouter)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;

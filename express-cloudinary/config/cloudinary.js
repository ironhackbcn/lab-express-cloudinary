const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: 'dslkk8z2m',
  api_key: '451693128444111',
  api_secret: 'BbfwtjdiLjfLK2aRxP2aRGieKME'
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'posts',
  allowedFormats: ['jpg','png']
});

const parser = multer({ storage: storage });

module.exports = parser;

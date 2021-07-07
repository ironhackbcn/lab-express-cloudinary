const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

const Post = require("./../models/post");


const CLOUD_NAME = 'screeeen';
const API_KEY = '819378991263422';
const API_SECRET = 'mRuRVEH_mhZrvUGGtNeeC-zVJfs';


cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
  });
  const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "demo",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }]
  });

  const parser = multer({ storage: storage });


  module.exports = parser;
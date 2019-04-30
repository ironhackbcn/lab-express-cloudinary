const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "zebader",
  api_key: "556321387172978",
  api_secret: "wZnXyVPSU0pcDJbtebmBURPtANM"
  });

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "posts-lab",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }]
  });

const parser = multer({ storage: storage });

module.exports = parser;

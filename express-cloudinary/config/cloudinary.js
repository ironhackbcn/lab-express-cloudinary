const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");


cloudinary.config({
  cloud_name: 'jimmy3484353539',
  api_key: '162312426217164',
  api_secret: 'MptSiqnAaR2DCeWHdc0YB1TjJ_o'
  });


const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "config",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }]
  });

const parser = multer({ storage: storage });

module.exports = parser
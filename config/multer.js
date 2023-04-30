const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: 'dyacphiih',
  api_key: '815436796397956',
  api_secret: 'biMuCDIZOtLC5UIzS0jEjIVNznI'
})

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', 
    allowedFormats: ['jpg', 'png'],
  }
})

const upload = multer({ storage: storage })

module.exports = upload

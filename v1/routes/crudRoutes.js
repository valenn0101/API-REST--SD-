const express = require('express')
const {getAllProducts} = require('../../apiServices/getAllProducts/getAllProducts')
const {getOneProduct} = require('../../apiServices/getOneProduct/getOneProduct')
const createNewProduct = require('../../apiServices/createNewProduct/createNewProduct')
const createNewBrand = require('../../apiServices/createNewBrand/createNewBrand')
const {editOneProduct} = require('../../apiServices/editOneProduct/editOneProduct')
const {deleteOneProduct} = require('../../apiServices/deleteOneProduct/deleteOneProduct')

const upload = require('../../multer')

const router = express.Router()

router 
  .get('/', getAllProducts)
  .get('/info/:productID', getOneProduct)
  .post('/createProduct', upload.single('image_url'), createNewProduct)
  .post('/createBrand', upload.single('logo_url') , createNewBrand)
  .put('/updateProduct/:productID', editOneProduct)
  .put('/updateBrand/:brandID', editOneProduct)
  .delete('/deleteProduct/:productID', deleteOneProduct)

module.exports = router
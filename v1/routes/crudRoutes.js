const express = require('express')

const getAllProducts = require('../../apiServices/getAllProducts/getAllProducts')
const getAllBrands = require('../../apiServices/getAllBrands/getAllBrands')
const getOneProduct = require('../../apiServices/getOneProduct/getOneProduct')
const getOneBrand = require('../../apiServices/getOneBrand/getOneBrand')
const createNewProduct = require('../../apiServices/createNewProduct/createNewProduct')
const createNewBrand = require('../../apiServices/createNewBrand/createNewBrand')
const updateOneProduct = require('../../apiServices/editOneProduct/editOneProduct')
const editOneBrand = require('../../apiServices/editOneBrand/editOneBrand')
const deleteOneProduct = require('../../apiServices/deleteOneProduct/deleteOneProduct')
const deleteOneBrand = require('../../apiServices/deleteOneBrand/deleteOneBrand')
const authenticateUser = require('../../apiServices/authUser/authUser')

const upload = require('../../config/multer')

const router = express.Router()

router 
  .post('/auth', authenticateUser)

  .get('/', getAllProducts)

  .get('/brands', getAllBrands)

  .get('/info/:productID', getOneProduct)

  .get('/infoBrand/:brandID', getOneBrand)

  .post('/createProduct', upload.single('image_url'), createNewProduct)

  .post('/createBrand', upload.single('logo_url') , createNewBrand)

  .put('/updateProduct/:productID', upload.single('image_url') , updateOneProduct)

  .put('/updateBrand/:brandID', upload.single('logo_url') , editOneBrand)

  .delete('/deleteProduct/:productID', deleteOneProduct)

  .delete('/deleteBrand/:brandID', deleteOneBrand)

module.exports = router
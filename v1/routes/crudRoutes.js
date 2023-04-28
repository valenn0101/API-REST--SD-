const express = require('express')
const {getAllProducts} = require('../../apiServices/getAllProducts/getAllProducts')
const {getOneProduct} = require('../../apiServices/getOneProduct/getOneProduct')
const {createNewProduct} = require('../../apiServices/createNewProduct/createNewProduct')
const {editOneProduct} = require('../../apiServices/editOneProduct/editOneProduct')
const {deleteOneProduct} = require('../../apiServices/deleteOneProduct/deleteOneProduct')

 
const router = express.Router()

router 
  .get('/', getAllProducts)

  .get('/info/:productID', getOneProduct)

  .post('/createProduct', editOneProduct)

  .put('/updateProduct/:productID', createNewProduct)

  .delete('/deleteProduct/:productID', deleteOneProduct)


module.exports = router
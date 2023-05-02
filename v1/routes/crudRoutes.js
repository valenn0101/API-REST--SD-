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

/**
 * @openapi
 * /api/v1/crud/auth:
 *   post:
 *     tags:
 *       - Admin authentication
 *     summary: Authenticate user
 *     parameters:
 *       - name: username
 *         in: formData
 *         description: Username of the user
 *         required: true
 *         type: string
 *       - name: password
 *         in: formData
 *         description: Password of the user
 *         required: true
 *         type: string
 *         format: password
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */

  .post('/auth', authenticateUser)

/**
 * @openapi
 * /api/v1/crud:
 *   get:
 *     tags:
 *       - Product
  *     summary: Get All Products
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
*       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
  .get('/', getAllProducts)

/**
 * @openapi
 * /api/v1/crud/brands:
 *   get:
 *     tags:
 *       - Brand
  *     summary: Get all Brands
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
*       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
  .get('/brands', getAllBrands)

/**
 * @openapi
 * /api/v1/crud/info/83e123b4-306a-47de-b7b8-5c36d4e74c5a:
 *   get:
 *     tags:
 *       - Product
  *     summary: Get one product
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
*       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
  .get('/info/:productID', getOneProduct)

/**
 * @openapi
 * /api/v1/crud/infoBrand/123:
 *   get:
 *     tags:
 *       - Brand
 *     summary: Get a one brand
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
*       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
  .get('/infoBrand/:brandID', getOneBrand)

/**
 * @openapi
 * /api/v1/crud/createProduct:
 *   post:
 *     tags:
 *       - Product
 *     summary: Create a new product
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the product
 *               description:
 *                 type: string
 *                 description: Description of the product
 *               image_url:
 *                 type: string
 *                 format: binary
 *                 description: Image of the product
 *               price:
 *                 type: number
 *                 description: Price of the product
 *               discounted:
 *                 type: boolean
 *                 description: Indicates if the product is discounted
 *               discountPercentage:
 *                 type: number
 *                 description: Discount percentage of the product
 *               stock:
 *                 type: integer
 *                 description: Stock quantity of the product
 *               brandId:
 *                 type: string
 *                 description: ID of the brand associated with the product
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */

  .post('/createProduct', upload.single('image_url'), createNewProduct)

/**
 * @openapi
 * /api/v1/crud/createBrand:
 *   post:
 *     tags:
 *       - Brand
 *     summary: Create a new brand
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the product
 *               description:
 *                 type: string
 *                 description: Description of the product
 *               image_url:
 *                 type: string
 *                 format: binary
 *                 description: Image of the product
 *               id:
 *                 type: number
 *                 description: Id of the brand
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */

  .post('/createBrand', upload.single('logo_url') , createNewBrand)

/**
 * @openapi
 * /api/v1/crud/updateProduct/83e123b4-306a-47de-b7b8-5c36d4e74c5a:
 *   post:
 *     tags:
 *       - Product
 *     summary: Update one product
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the product
 *               description:
 *                 type: string
 *                 description: Description of the product
 *               image_url:
 *                 type: string
 *                 format: binary
 *                 description: Image of the product
 *               price:
 *                 type: number
 *                 description: Price of the product
 *               discounted:
 *                 type: boolean
 *                 description: Indicates if the product is discounted
 *               discountPercentage:
 *                 type: number
 *                 description: Discount percentage of the product
 *               stock:
 *                 type: integer
 *                 description: Stock quantity of the product
 *               brandId:
 *                 type: string
 *                 description: ID of the brand associated with the product
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */

  .put('/updateProduct/:productID', upload.single('image_url') , updateOneProduct)

/**
 * @openapi
 * /api/v1/crud/updateBrand/123:
 *   post:
 *     tags:
 *       - Brand
 *     summary: Update a one brand
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the product
 *               description:
 *                 type: string
 *                 description: Description of the product
 *               image_url:
 *                 type: string
 *                 format: binary
 *                 description: Image of the product

 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */

  .put('/updateBrand/:brandID', upload.single('logo_url') , editOneBrand)

/**
 * @openapi
 * /api/v1/crud/deleteProduct/:83e123b4-306a-47de-b7b8-5c36d4e74c5a:
 *   get:
 *     tags:
 *       - Product
 *     summary: Delete one Product
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
*       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */

  .delete('/deleteProduct/:productID', deleteOneProduct)

/**
 * @openapi
 * /api/v1/crud/deleteBrand/1234:
 *   get:
 *     tags:
 *       - Brand
 *     summary: Delete one Brand
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
*       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */

  .delete('/deleteBrand/:brandID', deleteOneBrand)

module.exports = router
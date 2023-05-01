const { PrismaClient } = require('@prisma/client')
const cloudinary = require('cloudinary').v2
const logger = require('../../config/logger')
const prisma = new PrismaClient()
const {v4: uuidv4} = require('uuid')


const createNewProduct = async (req, res) => {
  const { name, description, price, discounted, discountPercentage, stock, brandId} = req.body
  const id = uuidv4()
  const imageUrl = req.file.path

  const discountedValue = Boolean(discounted)
  const stockValue = parseInt(stock)
  const descriptionValue = req.body.description ? req.body.description : null

  const sessionId = req.cookies.sessionId 

  if (!sessionId) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    const result = await cloudinary.uploader.upload(imageUrl)

    const product = await prisma.products.create({
      data: {
        name,
        description: descriptionValue,
        id,
        price: parseFloat(price),
        discounted: discountedValue,
        discountPercentage: parseFloat(discountPercentage),
        stock: stockValue,
        brandId,
        image_url: result.secure_url,
      },
      include: {
        brand: true,
      },
    })

    res.status(201).json({ success: true, product })
  } catch (error) {
    logger.error(error + ' Error creating the product')
    res.status(500).json({ success: false, error: 'Error creating the product.' })
  }
}

module.exports = createNewProduct

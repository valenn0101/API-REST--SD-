const { PrismaClient } = require('@prisma/client')
const cloudinary = require('cloudinary').v2
const logger = require('../../config/logger')
const prisma = new PrismaClient()
const { v4: uuidv4 } = require('uuid')

const createNewProduct = async (req, res) => {
  const { name, description, price, discounted, discountPercentage, stock, brandName } = req.body
  const id = uuidv4()
  const imageUrl = req.file.path

  const sessionId = req.headers['x-session-id']

  if (!sessionId) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    const result = await cloudinary.uploader.upload(imageUrl)

    const product = await prisma.products.create({
      data: {
        id,
        name,
        description,
        image_url: result.secure_url,
        price: parseFloat(price),
        discounted: discounted === 'true' ? true : false,
        discountPercentage: parseFloat(discountPercentage),
        stock: parseInt(stock),
        brandId: brandName,
      },
      include: {
        brand: true,
      },
    })

    res.status(201).json({ success: true, product })
  } catch (error) {
    console.log(error + 'Error creating the product')
    logger.error(error + ' Error creating the product')
    res.status(500).json({ success: false, error: 'Error creating the product., error' })
  }
}

module.exports = createNewProduct

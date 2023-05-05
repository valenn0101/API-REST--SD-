const { PrismaClient } = require('@prisma/client')
const cloudinary = require('cloudinary').v2
const logger = require('../../config/logger')
const prisma = new PrismaClient()

const updateOneProduct = async (req, res) => {
  const productId = req.params.productID

  const sessionId = req.headers['x-session-id']

  if (!sessionId) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    const existingProduct = await prisma.products.findUnique({
      where: {
        id: productId,
      },
    })

    if (!existingProduct) {
      logger.error('Product not found')
      return res.status(404).json({ message: 'Product not found' })
    }

    const { name, description, discounted, discountPercentage, stock, brandName, price } = req.body
    const imageUrl = req.file.path
    const result = await cloudinary.uploader.upload(imageUrl)

    const updatedProduct = await prisma.products.update({
      where: {
        id: productId,
      },
      data: {
        name,
        description,
        price: parseFloat(price),
        discounted,
        discountPercentage: parseFloat(discountPercentage),
        stock: parseInt(stock),
        brandName,
        image_url: result.secure_url,
      },
    })

    res.status(200).json(updatedProduct)
  } catch (error) {
    console.log(error)
    logger.log(error)
    res.status(500).json({ error: 'Something went wrong'})
  }
}

module.exports = updateOneProduct

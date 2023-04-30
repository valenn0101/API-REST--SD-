const { PrismaClient } = require('@prisma/client')
const logger = require('../../config/logger')
const prisma = new PrismaClient()

const getOneProduct = async (req, res) => {
  const { productID } = req.params

  try {
    const product = await prisma.products.findUnique({
      where: {
        id:productID,
      },
    })

    if (!product) {
      logger.error('Product not found')
      return res.status(404).json({ error: 'Product not found' })
    }

    return res.status(200).json(product)
  } catch (error) {
    logger.error('Error retrieving product:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = getOneProduct

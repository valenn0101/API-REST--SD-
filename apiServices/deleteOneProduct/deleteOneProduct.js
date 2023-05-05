const { PrismaClient } = require('@prisma/client')
const logger = require('../../config/logger')
const prisma = new PrismaClient()

const deleteOneProduct = async (req, res) => {
  const productId = req.params.productID
  
  const sessionId = req.headers['x-session-id']

  if (!sessionId) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    const deletedProduct = await prisma.products.delete({
      where: {
        id: productId,
      },
    })

    res.status(200).json(deletedProduct).send('Deleted')
  } catch (error) {
    console.log(error)
    logger.error(error + 'Failed to delete product')
    res.status(500).json({ error: 'Failed to delete product' })
  }
}

module.exports = deleteOneProduct

const prisma = require('../../config/prisma')
const logger = require('../../config/logger')

async function getAllProducts(req, res) {
  console.log(req.cookies)
  try {
    const products = await prisma.products.findMany()
    res.status(200).json({ products: [...products], message: 'These are the products' })
  } catch (error) {
    logger.error({error : 'Failed to retrieve products. Please try again later'})
    res.status(500).json({ error: 'Failed to retrieve products. Please try again later.' })
  } finally {
    await prisma.$disconnect()
  }
}

module.exports = getAllProducts

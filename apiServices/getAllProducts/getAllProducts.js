const prisma = require('../../config/prisma')

async function getAllProducts(req, res) {
  try {
    const products = await prisma.products.findMany()
    res.status(200).json({ products: [...products], message: 'These are the products' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve products. Please try again later.' })
  } finally {
    await prisma.$disconnect()
  }
}

module.exports = getAllProducts

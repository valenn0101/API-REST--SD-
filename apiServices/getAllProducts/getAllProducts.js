const prisma = require('../../prisma')

async function getAllProducts(req, res) {
  try {
    const products = await prisma.products.findMany()
    res.json({ products: [...products], message: 'These are the products' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve products. Please try again later.' })
  } finally {
    await prisma.$disconnect()
  }
}

module.exports = getAllProducts

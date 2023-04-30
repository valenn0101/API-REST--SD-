const prisma = require('../../prisma')

async function getAllBrands(req, res) {
  try {
    const brands = await prisma.brands.findMany()
    res.json({ brands: [...brands], message: 'These are the brands' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve brands. Please try again later.' })
  } finally {
    await prisma.$disconnect()
  }
}

module.exports = getAllBrands

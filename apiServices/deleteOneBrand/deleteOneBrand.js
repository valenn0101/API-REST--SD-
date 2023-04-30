const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const deleteOneBrand = async (req, res) => {
  const brandId = req.params.brandID

  try {
    const deletedBrand = await prisma.brands.delete({
      where: {
        id: brandId,
      },
    })

    res.status(200).json(deletedBrand).send('Deleted')
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to delete brand' })
  }
}

module.exports = deleteOneBrand

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const deleteOneProduct = async (req, res) => {
  const productId = req.params.productID

  try {
    const deletedProduct = await prisma.products.delete({
      where: {
        id: productId,
      },
    })

    res.status(200).json(deletedProduct).send('Deleted')
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to delete product' })
  }
}

module.exports = deleteOneProduct

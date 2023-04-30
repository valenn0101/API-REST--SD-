const { PrismaClient } = require('@prisma/client')
const cloudinary = require('cloudinary').v2

const prisma = new PrismaClient()

const updateOneBrand = async (req, res) => {
  const brandId = req.params.brandID
  
  try {
    const existingBrand = await prisma.brands.findUnique({
      where: {
        id: brandId, 
      },
    })
      
    if (!existingBrand) {
      return res.status(404).json({ error: 'Brand not found' })
    }    
  
    const { name, description } = req.body 
    const logoUrl = req.file.path
    const result = await cloudinary.uploader.upload(logoUrl)
  
    const updatedBrand = await prisma.brands.update({
      where: {
        id: brandId,
      },
      data: {
        name: name,
        description: description,
        logo_url: result.secure_url,
      },
    })
  
    res.status(200).json(updatedBrand)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to update brand' })
  }
}

module.exports = updateOneBrand

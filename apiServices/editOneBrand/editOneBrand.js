const { PrismaClient } = require('@prisma/client')
const cloudinary = require('cloudinary').v2
const logger = require('../../config/logger')
const prisma = new PrismaClient()

const updateOneBrand = async (req, res) => {
  const brandId = req.params.brandID

  const sessionId = req.cookies.sessionId 

  if (!sessionId) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  
  try {
    const existingBrand = await prisma.brands.findUnique({
      where: {
        id: brandId, 
      },
    })
      
    if (!existingBrand) {
      logger.error('Brand not found')
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
    logger.error(error)
    res.status(500).json({ error: 'Failed to update brand' })
  }
}

module.exports = updateOneBrand

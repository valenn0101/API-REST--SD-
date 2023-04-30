const { PrismaClient } = require('@prisma/client')
const cloudinary = require('cloudinary').v2
const logger = require('../../config/logger')
const prisma = new PrismaClient()

const createNewBrand = async (req, res) => {
  const { name } = req.body
  const { description } = req.body
  const logoUrl = req.file.path
  const {id} = req.body

  try {
    const result = await cloudinary.uploader.upload(logoUrl)

    const brand = await prisma.brands.create({
      data: {
        name,
        id,
        description,
        logo_url: result.secure_url,
      },
    })

    res.status(201).json({ success: true, brand })
  } catch (error) {
    logger.error(error + ' Error creating the brand.')
    res.status(500).json({ success: false, error: 'Error creating the brand.' })
  }
}

module.exports = createNewBrand

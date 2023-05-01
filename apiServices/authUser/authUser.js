const {v4: uuidv4} = require('uuid')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const sessions = []

const authenticateUser = async (req, res) => {
  const { username, password } = req.body
  
  if (!username || !password) {
    return res.status(400).send('No username or password provided')
  }
  
  try {
    const existingUser = await prisma.users.findUnique({
      where: {
        username: username,
      },
    })
  
    if (!existingUser) {
      console.log('User not found')
      return res.status(404).send('User not found')
    }
  
    if (existingUser.password !== password) {
      console.log('Invalid password')
      return res.status(401).send('Invalid password')
    }

    const sessionId = uuidv4()
    sessions.push({sessionId})

    res.cookie('sessionId', sessionId, {
      httpOnly: true,
        
    })
  
    console.log('Authentication successful')
    res.status(200).redirect('/api/v1/crud')
  
  } catch (error) {
    console.error('Error while authenticating user:', error)
    res.status(500).send('Internal server error')
  }
}

module.exports = authenticateUser
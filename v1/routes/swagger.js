const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const path = require('path')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'APP Crud Ecommerce',
      version: '1.0.0'
    }
  },
  apis: [`${path.join(__dirname, './crudRoutes.js')}`],
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app, port) =>{
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get('/api/v1/docs.json', (req, res)=>{
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })

  console.log(`Version 1 Docs are available at http://localhost:${port}/api/v1/docs`)
}

module.exports = {swaggerDocs}
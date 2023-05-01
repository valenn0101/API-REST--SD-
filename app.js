const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const routes = require('./v1/routes/crudRoutes')
const logger = require('./config/logger')


app
app.use((err, req, res, next) => {
  logger.error(err.stack)
  res.status(500).send('Ha ocurrido un error.') 
})
  .use(cookieParser())
  .use(express.json())
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: true }))
  .use('/api/v1/crud', routes)

module.exports = app

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const routes = require('./v1/routes/crudRoutes')
const logger = require('./config/logger')

app
  .use((err, req, res, next) => {
    logger.error(err.stack)
    res.status(500).send('Ha ocurrido un error.')
  })
  .use(cors({ origin: '*', credentials: true }))
  .use(cookieParser())
  .use(express.json())
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: true }))
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Set-Cookie')
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
  })
  .use('/api/v1/crud', routes)

module.exports = app


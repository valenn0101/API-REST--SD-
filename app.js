const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./v1/routes/crudRoutes')


app
  .use(express.json())
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: true }))
  .use('/api/v1/crud', routes)

module.exports = app

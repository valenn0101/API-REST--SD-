const express = require('express')
const app = express()
const routes = require('./v1/routes/crudRoutes')

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/api/v1/crud', routes)

module.exports = app

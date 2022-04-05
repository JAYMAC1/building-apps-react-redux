const routes = require('express').Router()
const controller = require('../controller/controller')

routes
  .route('/api/categories')
  .post(controller.createCategories)
  .get(controller.getCategories)

module.exports = routes

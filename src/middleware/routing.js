/* @flow */
'use strict'

const controllers = require('../controllers')
const router = require('koa-router')()
const logger = require('winston')

module.exports = function route (options) {
  // Remember - if you don't call await next(); then this middleware

  // logger.debug(`loading ${Object.keys(controllers).length} controllers...`)
  for (let controllerName in controllers) {
    if (controllers[controllerName]) {
      logger.debug(`loading ${controllerName}`)
      // eslint-ignore
      controllers[controllerName](router)
      logger.debug(`${controllerName} loaded successfully`)
    }
  }
  logger.debug('finished loading controllers...')

  return router
}
'use strict'

const schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          }
        }
      }
    }
  }
}

const simpleHandler = async (request, reply) => ({ hello: 'world' })

module.exports = (fastify, options, next) => {
  fastify.get('/hello', schema, simpleHandler)
  next()
}
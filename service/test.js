'use strict'

async function routes(fastify, opts) {
  fastify.route({
    method: 'GET',
    url: '/',
    schema: {
      // request needs to have a querystring with a `name` parameter
      querystring: {
        name: { type: 'string' }
      },
      // the response needs to be an object with an `hello` property of type
      response: {
        200: {
          type: 'object',
          properties: {
            hello: { type: 'string' }
          }
        }
      }
    },
    // this function is executed for every request before the handler is executed
    preHandler: async (req, res) => {
      // check authentication
    },
    handler: async (req, res) => {
      return { hello: 'world' }
    }
  })
}

module.exports = routes
'use strict'

async function routes(fastify, opts) {
  fastify.get('/health', async (req, res) => {
    res.type('application/json').code(200)
    return { status: 'ok' }
  })
}

module.exports = routes
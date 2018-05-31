'use strict'
require('dotenv').config()
// const log = require('pino')({ level: 'info' })
const app = require('fastify')()
// const fastifyEnv = require('fastify-env')
const helloHandler = require('./handlers/helloHandler')

// const envSchema = {
//   type: 'object',
//   required: [ 'PORT' ],
//   properties: {
//     PORT: {
//       type: 'string',
//       default: '3000'
//     }
//   }
// }

// const options = {
//   schema: envSchema,
//   data: data // optional, default: process.env
// }

const opts = {}
opts.port = process.env.PORT || 3000

opts.logger = {
  level: 'warn'
}

//const app = require('fastify')(opts)
// fastify.register(fastifyEnv, options, err => {
//   console.log(fastify.config)
// })
app.register(require('./service/health'))
app.register(require('./service/test'))

const start = async opts => {
  try {
    await app.listen(opts.port, '::')
    app.log.info(`server listeing on ${app.server.address().port}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}


start(opts)
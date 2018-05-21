'use strict'

const request = require('supertest')
const helloHandler = require('../handlers/helloHandler')

describe('test the root path', () => {
  test('it should repond to the GET method', async () => {
    const response = await request(helloHandler).get('/hello')
    expect(response.statusCode).toBe(200)
  })
})

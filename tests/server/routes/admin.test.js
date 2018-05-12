const request = require('supertest')

jest.mock('../../../server/db/users', () => ({
  createUser: () => Promise.resolve(),
  userExists: username => Promise.resolve(username === 'foo'),
  getUserByName: username => {
    if (username === 'GOODUSER') {
      return Promise.resolve({
        hash: 'GOODHASH'
      })
    } else if (username === 'BADUSER') {
      return Promise.resolve({
        hash: 'BADHASH'
      })
    } else {
      return Promise.resolve(undefined)
    }
  }
}))

jest.mock('../../../server/auth/hash', () => ({
  verifyUser: (hash, password) => Promise.resolve(hash === 'GOODHASH')
}))

jest.mock('../../../server/auth/token', () => ({
  issue: (req, res) => Promise.resolve(res.status(201).json({
    message: 'Authentication successful.',
    token: 'goosetoken'
  })),
  decode: (req, res, next) => {
    req.user = {
      id: 1,
      username: 'testuser'
    }
    next()
  }
}))

const server = require('../../../server/server')

test('post /api/v1/adminregister', () => {
  return request(server)
    .post('/api/v1/adminregister')
    .send({username: 'notfoo'})
    .set('Accept', 'application/json')
    .then(res => {
      expect(res.statusCode).toBe(201)
    })
})

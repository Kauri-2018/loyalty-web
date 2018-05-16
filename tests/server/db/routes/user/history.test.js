const request = require('supertest')

jest.mock('../../../../../server/db/visits', () => ({
  getVisits: id => Promise.resolve(
    {
      timestamp: 1521229685183
    })
}))

jest.mock('../../../../../server/auth/token', () => ({
  decode: (req, res, next) => {
    req.user = {
      id: 17
    }
    next()
  },
  issue: (req, res, next) => next()
}))

const server = require('../../../../../server/server')

test('get /api/v1/user/history returns timestamps for user visits', () => {
  const expected = 1521229685183
  return request(server)
    .get('/api/v1/user/history')
    .set('Accept', 'application/json')
    .then(res => {
      const actual = res.body.timestamp
      expect(actual).toBe(expected)
    })
})

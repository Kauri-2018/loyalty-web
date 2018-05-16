const request = require('supertest')

jest.mock('../../../../server/db/admin', () => ({
  getVisits: () => Promise.resolve(
    [{
      id: 116,
      userId: 33,
      timestamp: 1519211809934
    },
    {
      id: 117,
      userId: 44,
      timestamp: 1520113994934
    },
    {
      id: 118,
      userId: 23,
      timestamp: 1521220675000
    }]
  )
}))

jest.mock('../../../../server/auth/token', () => ({
  decode: (req, res, next) => {
    req.user = {
      id: 3,
      role: 'admin'
    }
    next()
  },
  issue: (req, res, next) => next()
}))

const server = require('../../../../server/server')

test('GET /api/v1/admin/stats gets all visits for all users', () => {
  const expected = 3
  return request(server)
    .get('/api/v1/admin/stats')
    .set('Accept', 'application/json')
    .then(visits => {
      const actual = visits.body.length
      expect(actual).toBe(expected)
    })
})

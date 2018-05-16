const request = require('supertest')

jest.mock('../../../../../server/db/visits', () => ({
  getVisits: id => Promise.resolve(
    [{
      timestamp: 1521229685183
    }]),
  addVisit: id => Promise.resolve(1010),
  countVisits: id => Promise.resolve(2)
}))

jest.mock('../../../../../server/checkin/isFirstVisitToday', () => ({
  isFirstVisitToday: visits => true
}))

jest.mock('../../../../../server/auth/token', () => ({
  decode: (req, res, next) => {
    req.user = {
      id: 3
    }
    next()
  },
  issue: (req, res, next) => next()
}))

const server = require('../../../../../server/server')

test('POST /api/v1/user/checkin checks if user can check in today', () => {
  return request(server)
    .post('/api/v1/user/checkin')
    .set('Accept', 'application/json')
    .expect(200)
    .then(res => {
      expect(res.body.count).toBe(2)
    })
})

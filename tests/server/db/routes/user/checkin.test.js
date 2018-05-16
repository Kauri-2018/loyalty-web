const request = require('supertest')

jest.mock('../../../../../server/db/visits', () => ({
  getVisits: id => Promise.resolve(
    {
      timestamp: 1521229685183
    },
    {
      timestamp: 1521285799896
    }),
  addVisit: id => Promise.resolve(1010),
  countVisits: id => Promise.resolve(4)
}))

jest.mock('../../../../../server/checkin/isFirstVisitToday', () => ({
  isFirstVisitToday: visits => false
}))

jest.mock('../../../../../server/checkin/isCorrectCode', () => ({
  isCorrectCode: passcode => false
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

test('get /api/v1/user/checkin checks if user can check in today', () => {
  return request(server)
    .get('/api/v1/user/checkin')
    .set('Accept', 'application/json')
    .then(res => {
      console.log(res.statusCode)
    })
})

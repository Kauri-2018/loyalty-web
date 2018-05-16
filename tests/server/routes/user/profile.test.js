const request = require('supertest')

jest.mock('../../../../server/db/users', () => ({
  getUserByUserId: id => Promise.resolve({
    id: 116,
    userId: 33,
    name: 'Logan Bruno',
    profilePhoto: 'loganandma4eva.com/pic/1',
    email: 'thebrunos@gmail.com',
    membershipType: 'member',
    membershipNumber: '0000995'
  })
}))

jest.mock('../../../../server/auth/token', () => ({
  decode: (req, res, next) => {
    req.user = {
      id: 3
    }
    next()
  },
  issue: (req, res, next) => next()
}))

const server = require('../../../../server/server')

test('GET /api/v1/user/profile retrieves user profile', () => {
  const expected = 'Logan Bruno'
  return request(server)
    .get('/api/v1/user/profile')
    .set('Accept', 'application/json')
    .then(res => {
      const actual = res.body.name
      expect(actual).toBe(expected)
    })
})

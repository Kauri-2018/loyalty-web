const request = require('supertest')

jest.mock('../../../../server/db/admin', () => ({
  getAdminByUserId: () => Promise.resolve({
    id: 100,
    userId: 1,
    name: 'Helen Justineau',
    profilePhoto: 'lastwomanstanding.com/onlyme',
    email: 'anyoneoutthere@gmail.com',
    expiryDate: '14/11/2020',
    membershipType: 'admin',
    membershipNumber: '0000123'
  })
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

test('GET /api/v1/admin/profile gets user admin profile', () => {
  const expected = 'Helen Justineau'
  return request(server)
    .get('/api/v1/admin/profile')
    .set('Accept', 'application/json')
    .then(admin => {
      const actual = admin.body.name
      expect(actual).toBe(expected)
    })
})

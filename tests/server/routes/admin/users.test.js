const request = require('supertest')

jest.mock('../../../../server/db/admin', () => ({
  getUsers: () => Promise.resolve(
    [{
      id: 1,
      userId: 33,
      name: 'Kristy Thomas',
      profilePhoto: 'www.bsc.com/president',
      email: 'president-bsc-kristy@gmail.com',
      expiryDate: '31/12/2020',
      membershipType: 'member',
      membershipNumber: '0000312'
    },
    {
      id: 2,
      userId: 34,
      name: 'Mary Anne Spier',
      profilePhoto: 'www.bsc.com/secretary',
      email: 'secretary-bsc-kristy@gmail.com',
      expiryDate: '12/12/2020',
      membershipType: 'member',
      membershipNumber: '0000313'
    },
    {
      id: 3,
      userId: 35,
      name: 'Claudia Kishi',
      profilePhoto: 'www.bsc.com/vicepres',
      email: 'vicepres-bsc-kristy@gmail.com',
      expiryDate: '1/12/2020',
      membershipType: 'member',
      membershipNumber: '0000314'
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

test('GET /api/v1/admin/users gets all users', () => {
  const expected = 3
  return request(server)
    .get('/api/v1/admin/users')
    .set('Accept', 'application/json')
    .then(users => {
      const actual = users.body.length
      expect(actual).toBe(expected)
    })
})

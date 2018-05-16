const request = require('supertest')

jest.mock('../../../../server/db/admin', () => ({
  getUserByName: username => Promise.resolve({
    id: 4,
    username: 'Brutus',
    hash: 'traitor',
    role: 'member'
  })
}))

jest.mock('../../../../server/auth/hash', () => ({
  verifyUser: (hash, password) => (hash === 'traitor')
}))

jest.mock('../../../../server/auth/token', () => ({
  issue: (req, res) => Promise.resolve(res.status(201).json({
    message: 'Authentication successful.',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJkb24iLCJpYXQiOjE1MjU2NjQ4NTgsImV4cCI6MTUyNTc1MTI1OH0.ofOMvjwHAEkbAnMK7NC2xG3RneUlGGeTE52OC-Di06wtoken'
  })),
  decode: (req, res, next) => {
    next()
  }
}))

const server = require('../../../../server/server')

test('POST /api/v1/admin/login does not allow member to login to admin', () => {
  const expected = 'Cannot read property \'hash\' of undefined'
  return request(server)
    .post('/api/v1/admin/login')
    .set('Accept', 'application/json')
    .send({username: 'Aragorn'})
    .expect(400)
    .then(res => {
      expect(res.body.errorType).toBe(expected)
    })
})

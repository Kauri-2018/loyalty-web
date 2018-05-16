const request = require('supertest')

jest.mock('../../../../server/db/admin', () => ({
  getUserByName: username => Promise.resolve({
    id: 4,
    username: 'Aragorn',
    hash: 'gondorking',
    role: 'admin'})
}))

jest.mock('../../../../server/auth/hash', () => ({
  verifyUser: (hash, password) => (hash === 'gondorking')
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

test('POST /api/v1/admin/login allows admin login', () => {
  const expected = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJkb24iLCJpYXQiOjE1MjU2NjQ4NTgsImV4cCI6MTUyNTc1MTI1OH0.ofOMvjwHAEkbAnMK7NC2xG3RneUlGGeTE52OC-Di06wtoken'
  return request(server)
    .post('/api/v1/admin/login')
    .set('Accept', 'application/json')
    .send({username: 'Aragorn'})
    .expect(201)
    .then(res => {
      expect(res.body.token).toBe(expected)
    })
})

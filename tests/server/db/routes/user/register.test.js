const request = require('supertest')

jest.mock('../../../../../server/db/users', () => ({
  userExists: username => Promise.resolve(username === 'Pippin'),
  createUser: (username, name, password) => Promise.resolve()
}))

jest.mock('../../../../../server/auth/token', () => ({
  issue: (req, res) => {
    res.status(201).json({
    message: 'Authentication successful.',
    token: 'goosetoken'
  })}
}))

const server = require('../../../../../server/server')

test('post /api/v1/user/register detects existing user', () => {
  return request(server)
    .post('/api/v1/user/register')
    .set('Accept', 'application/json')
    .send({username: 'Pippin', name: 'Pippin', password: 'Pippin'})
    .then(res => {
      expect(res.statusCode).toBe(400)
    })
})

test('post /api/v1/user/register detects non-existant user', () => {
  return request(server)
    .post('/api/v1/user/register')
    .set('Accept', 'application/json')
    .send({username: 'Merry', name: 'Merry', password: 'Merry'})
    .then(res => {
      expect(res.statusCode).toBe(201)
    })
})

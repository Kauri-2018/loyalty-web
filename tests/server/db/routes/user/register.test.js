const request = require('supertest')

jest.mock('../../../../../server/routes/user', () => ({
  register: () => Promise.resolve()
  // invalidCredentials: res => Promise.resolve(res === 'INVALID_CREDENTIALS')
}))

jest.mock('../../../../../server/db/users', () => ({
  userExists: username => Promise.resolve(username === 'Pippin'),
  createUser: (username, name, password) => Promise.resolve(
    username === 'Pippin', name === 'Pippin', password === 'Pippin'
  )
}))

const server = require('../../../../../server/server')

test('post /api/v1/user/register', () => {
  return request(server)
    .post('/api/v1/user/register')
    .send({username: 'Merry'})
    .set('Accept', 'application/json')
    .then(res => {
      expect(res.statusCode).toBe(201)
    })
})

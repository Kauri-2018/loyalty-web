const request = require('supertest')

jest.mock('../../../../../server/db/users', () => ({
  getUserByName: username => Promise.resolve(username === 'Pippin')
}))

const server = require('../../../../../server/server')

test('post /api/v1/user/login does not allow member login', () => {
  return request(server)
    .post('/api/v1/user/register')
    .set('Accept', 'application/json')
    .send({username: 'Pippin', password: 'Pippin'})
    .then(res => {
      expect(res.statusCode).toBe(500)
    })
})

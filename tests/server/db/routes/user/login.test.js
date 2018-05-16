const request = require('supertest')

jest.mock('../../../../../server/db/users', () => ({
  getUserByName: username => Promise.resolve(username === 'Pippin')
}))

// jest.mock('../../../../../server/auth/token', () => ({
//   issue: (req, res) => {
//     res.status(201).json({
//       message: 'Authentication successful.',
//       token: 'goosetoken'
//     })
//   },
//   decode: (req, res, next) => {
//     next()
//   }
// }))

const server = require('../../../../../server/server')

test('post /api/v1/user/login does not allow member login', () => {
  return request(server)
    .post('/api/v1/user/register')
    .set('Accept', 'application/json')
    .send({username: 'Pippin', name: 'Pippin', password: 'Pippin'})
    .then(res => {
      expect(res.statusCode).toBe(500)
    })
})

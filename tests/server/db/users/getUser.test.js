const env = require('../test-environment')
const db = require('../../../../server/db/users')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialize(testDb)
})

afterEach(() => {
  return env.cleanup(testDb)
})

test('getUser returns a user', () => {
  return db.getUser(1, testDb)
    .then(user => {
      expect(user.username).toMatch('zoel')
    })
})

test('getUser does not return non-existent user', () => {
  return db.getUser(14, testDb)
    .then(user => {
      expect(user).toBeFalsy()
    })
})

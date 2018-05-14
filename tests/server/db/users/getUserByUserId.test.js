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

test('getUserByUserId returns a user profile', () => {
  return db.getUserByUserId(3, testDb)
    .then(user => {
      expect(user.name).toBe('Frank')
    })
})

test('getUserByUserId does not return non-existent profile', () => {
  return db.getUserByUserId(34, testDb)
    .then(user => {
      expect(user).toBeFalsy()
    })
})

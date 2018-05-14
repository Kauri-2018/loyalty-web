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

test('userExists returns existing user', () => {
  return db.userExists('wendy', testDb)
    .then(user => {
      expect(user).toBeTruthy()
    })
})

test('userExists does not return non-existent user', () => {
  return db.userExists('brody', testDb)
    .then(user => {
      expect(user).toBeFalsy()
    })
})

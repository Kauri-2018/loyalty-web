const env = require('../test-environment')
const db = require('../../../../server/db/admin')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialize(testDb)
})

afterEach(() => {
  return env.cleanup(testDb)
})

test('getUserByName brings back correct user', () => {
  const username = 'christiana'
  const expected = 5
  return db.getUserByName(username, testDb)
    .then(user => {
      expect(user.id).toBe(expected)
    })
})

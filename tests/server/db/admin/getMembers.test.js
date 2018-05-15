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

test('getMembers returns all users who are members', () => {
  const expected = 12
  return db.getMembers(testDb)
    .then(users => {
      expect(users.length).toBe(expected)
    })
})

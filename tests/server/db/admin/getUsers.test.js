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

test('getUsers returns member profiles', () => {
  const expected = 32
  return db.getUsers(testDb)
    .then(profiles => {
      expect(profiles.length).toBe(expected)
    })
})

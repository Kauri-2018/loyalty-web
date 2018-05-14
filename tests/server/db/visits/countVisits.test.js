const env = require('../test-environment')
const db = require('../../../../server/db/visits')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialize(testDb)
})

afterEach(() => {
  return env.cleanup(testDb)
})

test('countVisits returns the number of visits for user', () => {
  const userId = 21
  const expected = 2
  return db.countVisits(userId, testDb)
    .then(count => {
      expect(count).toEqual(expected)
    })
})

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

test('getVisits returns all visits pertaining to a user', () => {
  const userId = 21
  const expected = 2
  return db.getVisits(userId, testDb)
    .then(visits => {
      const actual = visits.length
      expect(actual).toBe(expected)
    })
})

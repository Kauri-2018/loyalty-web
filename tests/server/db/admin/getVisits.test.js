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

test('getVisits returns all visits', () => {
  return db.getVisits(testDb)
    .then(visits => {
      expect(visits.length).toBe(10)
    })
})

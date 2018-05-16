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

test('addVisit adds a visit to visits table', () => {
  const userId = 2
  return db.addVisit(userId, testDb)
    .then(newVisitId => {
      const actual = Number(newVisitId)
      expect(actual).toBe(1010)
    })
})

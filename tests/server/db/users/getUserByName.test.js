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

test('getUserByName returns named user', () => {
  return db.getUserByName('tori', testDb)
    .then(user => {
      expect(user.username).toMatch('tori')
    })
})

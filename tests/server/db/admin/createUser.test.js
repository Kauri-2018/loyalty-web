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

test('createUser creates new admin user', () => {
  const username = 'frodobaggins'
  const name = 'frodo'
  const password = 'bagendrocks'
  const expected = 133
  return db.createUser(username, name, password, testDb)
    .then(profileId => {
      expect(profileId).toContain(expected)
    })
})

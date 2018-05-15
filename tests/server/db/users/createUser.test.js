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

test('createUser makes a new user in the database', () => {
  const username = 'lucyliu'
  const name = 'lucy'
  const password = 'bananas'
  const expected = 133
  return db.createUser(username, name, password, testDb)
    .then(profileId => {
      expect(profileId).toContain(expected)
    })
})

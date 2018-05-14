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

test('userExists confirms an existing user', () => {
  return db.userExists('tosfadasdri', testDb)
    .then(user => {
      expect(user).toBeFalsy()
    })
})

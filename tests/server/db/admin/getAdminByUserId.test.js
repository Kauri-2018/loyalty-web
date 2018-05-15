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

test('getAdminByUserId returns admin profile', () => {
  const userId = 1
  const expected = 'Zoe'
  return db.getAdminByUserId(userId, testDb)
    .then(admin => {
      const actual = admin.name
      expect(actual).toBe(expected)
    })
})

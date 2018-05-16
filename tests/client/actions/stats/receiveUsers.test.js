const receiveUsers = require('../../../../client/actions/stats').receiveUsers

test('receiveUsers returns correct action.type', () => {
  const expected = 'USERS_SUCCESS'
  const actual = receiveUsers()
  expect(actual.type).toBe(expected)
})

test('receiveUsers returns correct action', () => {
  const expected = {
    type: 'USERS_SUCCESS'
  }
  const actual = receiveUsers()
  expect(actual).toEqual(expected)
})

test('receiveUsers returns users', () => {
  const users = {users: 'users'}
  const expected = {
    type: 'USERS_SUCCESS',
    users
  }
  const actual = receiveUsers(users)
  expect(actual).toEqual(expected)
})

const requestUsers = require('../../../../client/actions/stats').requestUsers

test('requestUsers returns correct action.type', () => {
  const expected = 'USERS_REQUEST'
  const actual = requestUsers()
  expect(actual.type).toBe(expected)
})

test('requestUsers returns correct action', () => {
  const expected = {
    type: 'USERS_REQUEST'
  }
  const actual = requestUsers()
  expect(actual).toEqual(expected)
})

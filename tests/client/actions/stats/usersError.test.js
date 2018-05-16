const usersError = require('../../../../client/actions/stats').usersError

test('usersError returns correct action.type', () => {
  const expected = 'USERS_FAILURE'
  const actual = usersError()
  expect(actual.type).toBe(expected)
})

test('usersError returns correct action', () => {
  const expected = {
    type: 'USERS_FAILURE'
  }
  const actual = usersError()
  expect(actual).toEqual(expected)
})

test('usersError returns error message', () => {
  const message = {message: 'error'}
  const expected = {
    type: 'USERS_FAILURE',
    message
  }
  const actual = usersError(message)
  expect(actual).toEqual(expected)
})

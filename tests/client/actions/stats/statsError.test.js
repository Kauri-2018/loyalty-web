const statsError = require('../../../../client/actions/stats').statsError

test('statsError returns correct action.type', () => {
  const expected = 'STATS_FAILURE'
  const actual = statsError()
  expect(actual.type).toBe(expected)
})

test('statsError returns correct action', () => {
  const expected = {
    type: 'STATS_FAILURE'
  }
  const actual = statsError()
  expect(actual).toEqual(expected)
})

test('statsError returns error message', () => {
  const message = {message: 'error'}
  const expected = {
    type: 'STATS_FAILURE',
    message
  }
  const actual = statsError(message)
  expect(actual).toEqual(expected)
})

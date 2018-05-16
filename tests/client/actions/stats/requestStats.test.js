const requestStats = require('../../../../client/actions/stats').requestStats

test('requestStats returns correct action.type', () => {
  const expected = 'STATS_REQUEST'
  const actual = requestStats()
  expect(actual.type).toBe(expected)
})

test('requesrStats returns correct action', () => {
  const expected = {
    type: 'STATS_REQUEST'
  }
  const actual = requestStats()
  expect(actual).toEqual(expected)
})

const receiveStats = require('../../../../client/actions/stats').receiveStats

test('receiveStats returns correct action.type', () => {
  const expected = 'STATS_SUCCESS'
  const actual = receiveStats()
  expect(actual.type).toBe(expected)
})

test('receiveStats returns correct action', () => {
  const expected = {
    type: 'STATS_SUCCESS'
  }
  const actual = receiveStats()
  expect(actual).toEqual(expected)
})

test('receiveStats returns stats', () => {
  const stats = {stats: 'statistics'}
  const expected = {
    type: 'STATS_SUCCESS',
    stats
  }
  const actual = receiveStats(stats)
  expect(actual).toEqual(expected)
})

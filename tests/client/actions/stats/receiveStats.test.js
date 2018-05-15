import {requestStats} from '../../../../client/actions/stats'

test('requestStats returns correct action.type', () => {
  const expected = 'STATS_REQUEST'
  const actual = requestStats()
  
})

import moment from 'moment'

const checkin = require('../../../server/checkin/isFirstVisitToday')

test('isFirstVisitToday returns true if member has not visited today', () => {
  const visits = ([
    {timestamp: 1520113854934},
    {timestamp: 1519211899934}
  ])
  const expected = true
  const actual = checkin.isFirstVisitToday(visits)
  expect(actual).toBe(expected)
})

test('isFirstVisitToday returns false if member has visited today', () => {
  const visits = ([
    {timestamp: 1520113854934},
    {timestamp: moment()}
  ])
  const expected = false
  const actual = checkin.isFirstVisitToday(visits)
  expect(actual).toBe(expected)
})

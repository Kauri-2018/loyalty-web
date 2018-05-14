import moment from 'moment'

const utils = require('../../../server/utils')

test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('returns current date in correct format', () => {
  const currentDate = moment()
  const expected = moment(currentDate).format('MMM Do YY')
  const actual = utils.getCurrentDate()
  expect(actual).toBe(expected)
})

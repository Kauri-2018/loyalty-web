const utils = require('../../../server/utils')

test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('get DateInfo returns date in correct format', () => {
  const date = 1526170090970
  const expected = 'May 13th 18'
  const actual = utils.getDateInfo(date)
  expect(actual).toBe(expected)
})

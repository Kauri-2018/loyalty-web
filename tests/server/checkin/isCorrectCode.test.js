require('dotenv').config()

const checkin = require('../../../server/checkin/isCorrectCode')

test('isCorrectCode returns true if entered passcode is correct', () =>{
  const string = 'monkeys'
  const expected = true
  const actual = checkin.isCorrectCode(string)
  expect(actual).toBe(expected)
})

test('isCorrectCode returns false if entered passcode is incorrect', () =>{
  const string = 'lions'
  const expected = false
  const actual = checkin.isCorrectCode(string)
  expect(actual).toBe(expected)
})

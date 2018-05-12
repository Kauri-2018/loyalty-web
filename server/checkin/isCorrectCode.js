function isCorrectCode (enteredCode) {
  const correctString = 'monkeys'

  if (
    enteredCode === correctString
  ) {
    return true
  } else return false
}

module.exports = {
  isCorrectCode
}

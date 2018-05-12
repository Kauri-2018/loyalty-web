function isCorrectCode (enteredString) {
  const correctString = process.env.PASSCODE
  if (
    enteredString === correctString
  ) {
    return true
  } else if (
    enteredString !== correctString
  ) {
    return false
  }
}

module.exports = {
  isCorrectCode
}

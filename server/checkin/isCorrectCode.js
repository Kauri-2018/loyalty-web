function isCorrectCode (enteredString) {
  const correctString = process.env.PASSCODE
  if (
    enteredString === correctString
  ) {
    return true
  } else {
    return false
  }
}

module.exports = {
  isCorrectCode
}

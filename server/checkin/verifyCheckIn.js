const isFirstVisitToday = require('../checkin/isFirstVisitToday').isFirstVisitToday
const isCorrectCode = require('../checkin/isCorrectCode').isCorrectCode

function verifyCheckIn (visits, string) {
  const visit = isFirstVisitToday(visits)
  const code = isCorrectCode(string)

  if (visit && code) {
    return true
  } else {
    return false
  }
}

module.exports = {
  verifyCheckIn
}

const utils = require('../utils.js')

function isFirstVisitToday (visits) {
  const timestamps = visits.map(userVisit => userVisit.timestamp)
  const lastVisit = Math.max(...timestamps)
  const lastVisitDate = utils.getDateInfo(lastVisit)
  const currentDate = utils.getCurrentDate()

  if (
    lastVisitDate !== currentDate
  ) {
    return true
  } else {
    return false
  }
}

module.exports = {
  isFirstVisitToday
}

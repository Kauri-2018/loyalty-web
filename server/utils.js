const moment = require('moment')

function getDateInfo (date) {
  return moment(date).format('MMM Do YY')
}

function getCurrentDate () {
  const currentDate = Date.now()
  return getDateInfo(currentDate)
}

module.exports = {
  getDateInfo,
  getCurrentDate
}

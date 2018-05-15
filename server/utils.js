const moment = require('moment')

function getDateInfo (date) {
  return moment(date).format('MMM Do YY')
}

function getCurrentDate () {
  const currentDate = moment()
  return getDateInfo(currentDate)
}

module.exports = {
  getDateInfo,
  getCurrentDate
}

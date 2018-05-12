const moment = require('moment')

function getDateInfo (date) {
  return moment(date).format('MMM Do YY')
}

module.exports = {
  getDateInfo,
  getCurrentDate
}



function getCurrentDate () {
  const currentDate = Date.now()
  return getDateInfo(currentDate)
}

// function convertDate (date) {
//   getDateInfo(date)
// }

// module.exports = {
//   getDateInfo,
//   getCurrentDate,
//   convertDate
// }

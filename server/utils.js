function getDateInfo (date) {
  const day = date.getDate()
  const month = date.getMonth()
  const newDate = {
    day,
    month
  }

  return newDate
}

function getCurrentDate () {
  const currentDate = new Date(Date.now())
  getDateInfo(currentDate)
}

function convertDate (date) {
  getDateInfo(date)
}

module.exports = {
  getDateInfo,
  getCurrentDate,
  convertDate
}

const getVisits = require('../db/visits').getVisits
const utils = require('../utils.js')

function getLastVisit () {
  const visits = getVisits()
  // find the latest visit
  // return utils.convertDate(latestVisit)

}

function checkLastVisit (lastVisitDate) {
  const currentDate = utils.getDateInfo()

}

module.exports = {
  getLastVisit,
  checkLastVisit
}
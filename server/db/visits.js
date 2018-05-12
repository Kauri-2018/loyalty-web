const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function addVisit (userId, db = connection) {
  return db('visits')
    .insert({
      user_id: userId
    })
}

function getVisits (userId, db = connection) {
  return db('visits')
    .where('user_id', '=', userId)
    .select(
      'timestamp'
    )
}

module.exports = {
  addVisit,
  getVisits
}

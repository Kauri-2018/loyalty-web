const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function addVisit (userId, db = connection) {
  return db('visits')
    .insert({
      user_id: userId
    })
}

function countVisits (userId, db = connection) {
  return db('visits')
    .where('user_id', '=', userId)
    .count('user_id as n')
    .then(count => count[0].n)
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
  getVisits,
  countVisits
}

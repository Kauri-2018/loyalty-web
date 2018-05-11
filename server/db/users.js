const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)
const {generate} = require('../auth/hash')

function getUserByName (username, db = connection) {
  return db('users')
    .select()
    .whereRaw('LOWER(username) LIKE ?', username.toLowerCase())
    .first()
}

function userExists (username, db = connection) {
  return db('users')
    .whereRaw('LOWER(username) LIKE ?', username.toLowerCase())
    .first()
    .then(user => !!user)
}

function createUser (username, name, password, db = connection) {
  const hash = generate(password)
  return db('users')
    .insert({
      username,
      hash,
      role: 'member'
    })
    .then((id) => {
      return db('profiles')
        .insert({
          user_id: id[0],
          name,
          membership_type: 'member'
        })
    })
}

function getUser (userId, conn = connection) {
  return conn('users')
    .where('id', '=', userId)
    .select(
      'id as userId',
      'cred_id as credId',
      'name',
      'order_text as orderText'
    )
    .first()
}

function getUserByUserId (userId, conn = connection) {
  return conn('profiles')
    .where('user_id', '=', userId)
    .select()
    .first()
}
function updateUser (user, conn = connection) {
  return conn('users')
    .where('id', '=', user.userId)
    .update({
      'id': user.userId,
      'cred_id': user.credId,
      'name': user.name,
      'order_text': user.orderText
    })
}

module.exports = {
  getUserByName,
  getUserByUserId,
  userExists,
  createUser,
  getUser,
  updateUser
}

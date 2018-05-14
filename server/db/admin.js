const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)
const {generate} = require('../auth/hash')

function getMembers (db = connection) {
  return db('users')
    .where('role', '=', 'member')
    .select(
      'id as userId',
      'username'
    )
}

function getUsers (db = connection) {
  return db('profiles')
    .where('membership_type', '=', 'member')
    .select()
}

function getVisits (db = connection) {
  return db('visits')
    .join('profiles', 'visits.user_id', '=', 'profiles.user_id')
    .select('visits.user_id', 'visits.timestamp', 'profiles.name', 'profiles.membership_number')
}

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
      role: 'admin'
    })
    .then((id) => {
      return db('profiles')
        .insert({
          user_id: id[0],
          name,
          membership_type: 'admin'
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

function getAdminByUserId (userId, conn = connection) {
  return conn('users')
    .join('profiles', 'profiles.user_id', '=', 'users.id')
    .where('id', '=', userId)
    .select(
      // check if we need id later
      'users.id as id',
      'users.username as username',
      'users.role as role',
      'profiles.name as name',
      'profiles.photo_url as profilePhoto',
      'profiles.email as email',
      'profiles.expiry_date as expiryDate',
      'membership_number as membershipNumber'
    )
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
  getMembers,
  getUserByName,
  getAdminByUserId,
  userExists,
  createUser,
  getUser,
  getUsers,
  getVisits,
  updateUser
}

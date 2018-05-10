const express = require('express')

const token = require('../auth/token')
const db = require('../db/users')
const hash = require('../auth/hash')

const router = express.Router()

router.use(express.json())

module.exports = router

router.post('/register', register, token.issue)

router.post('/login', login, token.issue)

router.get('/profile', token.decode, (req, res) => {
  db.getUserByUserId(req.user.id)
    .then(
      user => res.json(user))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

function login (req, res, next) {
  db.getUserByName(req.body.username)
    .then(user => {
      if (user.role === 'member') {
        return user && hash.verifyUser(user.hash, req.body.password)
      } else {
        throw new Error('NO_Authority')
      }
    })
    .then(isValid => {
      if (!isValid) {
        return invalidCredentials(res)
      }
      return isValid && next()
    })
    .catch((err) => {
      res.status(400).json({
        errorType: err.message
      })
    })
}

function register (req, res, next) {
  db.userExists(req.body.username)
    .then(exists => {
      if (exists) {
        return res.status(400).json({message: 'User exists'})
      }
      const {username, name, password} = req.body
      db.createUser(username, name, password)
        .then(() => next())
    })
    .catch(err => {
      res.status(500).json({message: err.message})
    })
}

function invalidCredentials (res) {
  res.status(400).json({
    errorType: 'INVALID_CREDENTIALS'
  })
}

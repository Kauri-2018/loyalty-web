const express = require('express')

const token = require('../auth/token')
const db = require('../db/admin')
const hash = require('../auth/hash')
const router = express.Router()

router.use(express.json())

module.exports = router

router.post('/register', register, token.issue)

router.post('/login', login, token.issue)

router.get('/stats', token.decode, (req, res) => {
  if (req.user.role === 'admin') {
    db.getVisits()
      .then(users => {
        res.json(users)
      })
      .catch(err => {
        res.status(500).send(err.message)
      })
  } else {
    noAuthority(res)
  }
})

router.get('/profile', token.decode, (req, res) => {
  // token.decode -- now req.user will contain the contents of our token
  // db.getUserByCredId(req.user.id)
  //   .then(credsId => res.json(credsId))
  //   .catch(err => {
  //     res.status(500).send(err.message)
  //   })
})

function login (req, res, next) {
  db.getUserByName(req.body.username)
    .then(user => {
      return user && hash.verifyUser(user.hash, req.body.password)
    })
    .then(isValid => {
      if (!isValid) {
        return invalidCredentials(res)
      }
      return isValid && next()
    })
    .catch(() => {
      res.status(400).json({
        errorType: 'DATABASE_ERROR'
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

function noAuthority (res) {
  res.status(400).json({
    errorType: 'NO_Authority'
  })
}

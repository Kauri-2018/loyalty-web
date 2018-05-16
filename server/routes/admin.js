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

router.get('/users', token.decode, (req, res) => {
  if (req.user.role === 'admin') {
    db.getUsers()
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
  db.getAdminByUserId(req.user.id)
    .then(admin => res.json(admin))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

function login (req, res, next) {
  db.getUserByName(req.body.username)
    .then(user => {
      if (!user) {
        throw new Error('INVALID_CREDENTIALS')
      } else if (user && user.role === 'admin') {
        return user
      }
    })
    .then(user => {
      return hash.verifyUser(user.hash, req.body.password)
    })
    .then(isValid => {
      return isValid ? next() : new Error('NO_Authority')
    })
    .catch((err) => {
      res.status(400).json({
        errorType: err.message || 'DATABASE_ERROR'
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

function invalidCredentials () {
  Error('INVALID_CREDENTIALS')
}

function noAuthority () {
  Error('NO_Authority')
}

const express = require('express')

const token = require('../auth/token')
const users = require('../db/users')
const hash = require('../auth/hash')
const vs = require('../db/visits')
const verifyCheckIn = require('../checkin/verifyCheckIn').verifyCheckIn


const router = express.Router()

router.use(express.json())

module.exports = router

router.post('/register', register, token.issue)

router.post('/login', login, token.issue)

router.get('/profile', token.decode, (req, res) => {
  users.getUserByUserId(req.user.id)
    .then(
      user => res.json(user))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/checkin', token.decode, (req, res) => {
  const userId = req.user.id
  vs.getVisits(userId)
    .then(visits => {
      verifyCheckIn(visits, req.body.passcode)
      if (verifyCheckIn) {
        vs.addVisit(userId)
          .then(() => {
            res.sendStatus(200)
          })
      } else {
        res.sendStatus(403).end()
      }
    })
})

function login (req, res, next) {
  users.getUserByName(req.body.username)
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
  users.userExists(req.body.username)
    .then(exists => {
      if (exists) {
        return res.status(400).json({message: 'User exists'})
      }
      const {username, name, password} = req.body
      users.createUser(username, name, password)
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

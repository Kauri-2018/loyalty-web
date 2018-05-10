const express = require('express')

const router = express.Router()

router.use(express.json())

module.exports = router

router.get('/', (req, res) => {
  // db.getUsers()
  //   .then(users => {
  //     res.json(users)
  //   })
  //   .catch(err => {
  //     res.status(500).send(err.message)
  //   })
  res.send('hi admin route')//test for loyalty app
})

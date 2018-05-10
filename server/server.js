const path = require('path')
const express = require('express')

const profile = require('./routes/profile')
const admin = require('./routes/admin')
const user = require('./routes/user')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/profile', profile)
server.use('/api/v1/admin', admin)
server.use('/api/v1/user', user)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server

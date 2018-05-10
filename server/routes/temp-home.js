const express = require('express')

const token = require('../auth/token')
const userExists = require('../db/users').userExists

const router = express.Router()

router.use(express.json())

module.exports = router

// router.get('/', (req, res) => {
//   db.getCurrentOrderItems()
//     .then(items => {
//       if (!items.length) {
//         return res.json({
//           id: 0,
//           items: [],
//           isCurrentOrderActive: false
//         })
//       }
//       const currentOrder = {
//         id: items[0].orderId,
//         items: items.map(item => ({
//           id: item.orderItemId,
//           name: item.userName,
//           order: item.orderDetails
//         })),
//         isCurrentOrderActive: true
//       }

//       res.json(currentOrder)
//     })
//     .catch(err => {
//       res.status(500).json({errorMessage: err.message})
//     })
// })

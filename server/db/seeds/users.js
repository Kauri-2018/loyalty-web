const {generate} = require('../../auth/hash')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, hash: generate('zoel'), username: 'zoel', role: 'Manager'},
        {id: 2, hash: generate('tori'), username: 'tori', role: 'Finance'},
        {id: 3, hash: generate('frank'), username: 'frank', role: 'IT'}
      ])
    })
}

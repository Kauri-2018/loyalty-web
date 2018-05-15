const {generate} = require('../../auth/hash')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, hash: generate('zoel'), username: 'zoel', role: 'admin'},
        {id: 2, hash: generate('tori'), username: 'tori', role: 'member'},
        {id: 3, hash: generate('frank'), username: 'frank', role: 'member'},
        {id: 4, hash: generate('charlie'), username: 'charlie', role: 'member'},
        {id: 5, hash: generate('christiana '), username: 'christiana', role: 'member'},
        {id: 6, hash: generate('ellie'), username: 'ellie', role: 'member'},
        {id: 7, hash: generate('tom'), username: 'tom', role: 'member'},
        {id: 8, hash: generate('elizabeth'), username: 'elizabeth', role: 'member'},
        {id: 9, hash: generate('jalyn'), username: 'jalyn', role: 'member'},
        {id: 10, hash: generate('isabella'), username: 'isabella', role: 'member'},
        {id: 11, hash: generate('xavier'), username: 'xavier', role: 'member'},
        {id: 12, hash: generate('jane'), username: 'jane', role: 'member'},
        {id: 13, hash: generate('wendy'), username: 'wendy', role: 'member'},
        {id: 14, hash: generate('bradley'), username: 'bradley', role: 'member'},
        {id: 15, hash: generate('elise'), username: 'elise', role: 'member'},
        {id: 16, hash: generate('lyda'), username: 'lyda', role: 'member'},
        {id: 17, hash: generate('annabell'), username: 'annabell', role: 'member'},
        {id: 18, hash: generate('helen'), username: 'helen', role: 'member'},
        {id: 19, hash: generate('richie'), username: 'richie', role: 'member'},
        {id: 20, hash: generate('clark'), username: 'clark', role: 'member'},
        {id: 21, hash: generate('kennith'), username: 'kennith', role: 'member'},
        {id: 22, hash: generate('marielle'), username: 'marielle', role: 'member'},
        {id: 23, hash: generate('aurelie'), username: 'aurelie', role: 'member'},
        {id: 24, hash: generate('johan'), username: 'johan', role: 'member'},
        {id: 25, hash: generate('mariana'), username: 'mariana', role: 'member'},
        {id: 26, hash: generate('laura'), username: 'laura', role: 'member'},
        {id: 27, hash: generate('favian'), username: 'favian', role: 'member'},
        {id: 28, hash: generate('alda'), username: 'alda', role: 'member'},
        {id: 29, hash: generate('julianne'), username: 'julianne', role: 'member'},
        {id: 30, hash: generate('brody'), username: 'brody', role: 'member'},
        {id: 31, hash: generate('austin'), username: 'austin', role: 'member'},
        {id: 32, hash: generate('lourdes'), username: 'lourdes', role: 'member'},
        {id: 33, hash: generate('krista'), username: 'krista', role: 'member'}
      ])
    })
}

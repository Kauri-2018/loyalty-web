exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'zoel', role: 'admin'},
        {id: 2, username: 'tori', role: 'member'},
        {id: 3, username: 'frank', role: 'member'},
        {id: 4, username: 'charlie', role: 'member'},
        {id: 5, username: 'christiana', role: 'member'},
        {id: 6, username: 'ellie', role: 'member'},
        {id: 7, username: 'tom', role: 'member'},
        {id: 8, username: 'elizabeth', role: 'member'},
        {id: 9, username: 'jalyn', role: 'member'},
        {id: 10, username: 'isabella', role: 'member'},
        {id: 11, username: 'xavier', role: 'member'},
        {id: 12, username: 'jane', role: 'member'},
        {id: 13, username: 'wendy', role: 'member'}
      ])
    })
}

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('visits').del()
    .then(function () {
      // Inserts seed entries
      return knex('visits').insert([
        {id: 1000, user_id: 2, timestamp: 1519211809934},
        {id: 1001, user_id: 2, timestamp: 1524718675000},
        {id: 1002, user_id: 3, timestamp: 1524718675000},
        {id: 1003, user_id: 1, timestamp: 1519211809934}
      ])
    })
}

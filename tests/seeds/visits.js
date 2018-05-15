exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('visits').del()
    .then(function () {
      // Inserts seed entries
      return knex('visits').insert([
        {id: 1000, user_id: 22, timestamp: 1519211809934},
        {id: 1001, user_id: 21, timestamp: 1519211899934},
        {id: 1002, user_id: 32, timestamp: 1519231809934},
        {id: 1003, user_id: 21, timestamp: 1519232809934},
        {id: 1004, user_id: 23, timestamp: 1519234809934},
        {id: 1005, user_id: 24, timestamp: 1520113804934},
        {id: 1006, user_id: 32, timestamp: 1520113854934},
        {id: 1007, user_id: 19, timestamp: 1520113874934},
        {id: 1008, user_id: 28, timestamp: 1520113894934},
        {id: 1009, user_id: 29, timestamp: 1520113994934}
      ])
    })
}

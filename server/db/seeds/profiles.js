exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {
          id: 100,
          user_id: 1,
          name: 'zoe',
          photo_url: 'https://avatars2.githubusercontent.com/u/34232621?s=400&v=4',
          email: 'zoe@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'admin',
          membership_number: '0000123'
        },
        {
          id: 101,
          user_id: 2,
          name: 'tori',
          photo_url: 'https://avatars2.githubusercontent.com/u/32422558?s=400&v=4',
          email: 'tori@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000124'
        },
        {
          id: 102,
          user_id: 3,
          name: 'frank',
          photo_url: 'https://avatars1.githubusercontent.com/u/23534573?s=460&v=4',
          email: 'frank@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000125'
        }
      ])
    })
}

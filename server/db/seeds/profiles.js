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
          photo_url: 'https://github.com/ZoeIML',
          email: 'zoe@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'admin',
          membership_number: '0000123'
        },
        {
          id: 101,
          user_id: 2,
          name: 'tori',
          photo_url: 'https://github.com/victoria-kaihe',
          email: 'tori@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000124'
        },
        {
          id: 102,
          user_id: 3,
          name: 'frank',
          photo_url: 'https://github.com/frankxuzy',
          email: 'frank@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000125'
        }
      ])
    })
}

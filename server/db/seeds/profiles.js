exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {
          id: 100,
          user_id: 1,
          name: 'Zoe',
          photo_url: 'https://avatars1.githubusercontent.com/u/34232621?s=400&u=103cffdb554d455941265210849ee496973c7fa2&v=4',
          email: 'zoe@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'admin',
          membership_number: '0000123'
        },
        {
          id: 101,
          user_id: 2,
          name: 'Tori',
          photo_url: 'https://avatars2.githubusercontent.com/u/32422558?s=400&v=4',
          email: 'tori@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000124'
        },
        {
          id: 102,
          user_id: 3,
          name: 'Frank',
          photo_url: 'https://avatars1.githubusercontent.com/u/23534573?s=460&v=4',
          email: 'frank@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000125'
        },
        {
          id: 103,
          user_id: 4,
          name: 'Charlie Hegmann',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/victorDubugras/128.jpg',
          email: 'Charlie-Hegmann@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000126'
        },
        {
          id: 104,
          user_id: 5,
          name: 'Christiana Ritchie',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ivanfilipovbg/128.jpg',
          email: 'Christiana-Ritchie@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000127'
        },
        {
          id: 105,
          user_id: 6,
          name: 'Ellie Fay',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/naitanamoreno/128.jpg',
          email: 'Ellie-Fay@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000128'
        },
        {
          id: 106,
          user_id: 7,
          name: 'Tom Schulist',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/abelcabans/128.jpg',
          email: 'Tom-Schulist@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000129'
        },
        {
          id: 107,
          user_id: 8,
          name: 'Elizabeth VonRueden',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/Silveredge9/128.jpg',
          email: 'Elizabeth@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000130'
        },
        {
          id: 108,
          user_id: 9,
          name: 'Jalyn Heller',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/agustincruiz/128.jpg',
          email: 'Jalyn-Heller@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000131'
        },
        {
          id: 109,
          user_id: 10,
          name: 'Isabella Pagac',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/solid_color/128.jpg',
          email: 'Isabella-Pagac@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000132'
        },
        {
          id: 110,
          user_id: 11,
          name: 'Xavier Harvey',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/dahparra/128.jpg',
          email: 'Xavier@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000133'
        },
        {
          id: 111,
          user_id: 12,
          name: 'Jane Rutherford',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/millinet/128.jpg',
          email: 'frank@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000134'
        },
        {
          id: 112,
          user_id: 13,
          name: 'Wendy Reilly',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/melvindidit/128.jpg',
          email: 'Wendy-Reilly@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000135'
        },
        {
          id: 113,
          user_id: 14,
          name: 'Bradley Mills',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/dnezkumar/128.jpg',
          email: 'Bradley-Mills@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000136'
        },
        {
          id: 114,
          user_id: 15,
          name: 'Elise Kassulke',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/holdenweb/128.jpg',
          email: 'Elise-Kassulke@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000137'
        },
        {
          id: 115,
          user_id: 16,
          name: 'Lyda Abbott',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/byrnecore/128.jpg',
          email: 'Lyda-Abbott@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000138'
        },
        {
          id: 116,
          user_id: 17,
          name: 'Annabell Wilderman',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/victorquinn/128.jpg',
          email: 'Annabell-w@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000139'
        },
        {
          id: 117,
          user_id: 18,
          name: 'Helen Huels',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/joreira/128.jpg',
          email: 'Helen-Huels@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000140'
        },
        {
          id: 118,
          user_id: 19,
          name: 'Richie Ankunding',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/panghal0/128.jpg',
          email: 'Richie-Ankunding@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000141'
        },
        {
          id: 119,
          user_id: 20,
          name: 'Clark Wolff',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/herrhaase/128.jpg',
          email: 'Clark-Wolff@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000142'
        },
        {
          id: 120,
          user_id: 21,
          name: 'Kennith Upton',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/operatino/128.jpg',
          email: 'Kennith@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000143'
        },
        {
          id: 121,
          user_id: 22,
          name: 'Marielle Gorczany',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/croakx/128.jpg',
          email: 'Marielle@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000144'
        },
        {
          id: 122,
          user_id: 23,
          name: 'Aurelie Jenkins',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/cbracco/128.jpg',
          email: 'Aurelie@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000145'
        },
        {
          id: 123,
          user_id: 24,
          name: 'Johan Bode',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/carlosm/128.jpg',
          email: 'Johan-Bode@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000146'
        },
        {
          id: 124,
          user_id: 25,
          name: 'Mariana Paucek',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/jacksonlatka/128.jpg',
          email: 'Mariana-p@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000147'
        },
        {
          id: 125,
          user_id: 26,
          name: 'Laura Torphy',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ssbb_me/128.jpg',
          email: 'Laura-Torphy@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000148'
        },
        {
          id: 126,
          user_id: 27,
          name: 'Favian Tromp',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/jennyyo/128.jpg',
          email: 'Favian-Tromp@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000149'
        },
        {
          id: 127,
          user_id: 28,
          name: 'Alda Ondricka',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/bu7921/128.jpg',
          email: 'Alda@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000150'
        },
        {
          id: 128,
          user_id: 29,
          name: 'Julianne Hodkiewicz',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/guillemboti/128.jpg',
          email: 'Julianne@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000151'
        },
        {
          id: 129,
          user_id: 30,
          name: 'Brody Koepp',
          photo_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/gavr1l0/128.jpg',
          email: 'Brody@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000152'
        },
        {
          id: 130,
          user_id: 31,
          name: 'Austin Reilly',
          photo_url: 'https://avatars2.githubusercontent.com/u/34232621?s=400&v=4',
          email: 'Austin@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000153'
        },
        {
          id: 131,
          user_id: 32,
          name: 'Lourdes Gottlieb',
          photo_url: 'https://avatars2.githubusercontent.com/u/32422558?s=400&v=4',
          email: 'Lourdes@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000154'
        },
        {
          id: 132,
          user_id: 33,
          name: 'Krista Gleason',
          photo_url: 'https://avatars1.githubusercontent.com/u/23534573?s=460&v=4',
          email: 'Krista@kauri.co.nz',
          expiry_date: '31/12/2020',
          membership_type: 'member',
          membership_number: '0000155'
        }
      ])
    })
}

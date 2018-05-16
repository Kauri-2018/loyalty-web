import nock from 'nock'

jest.mock('../../../client/utils/localStorage', () => ({
  get: () => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJkb24iLCJpYXQiOjE1MjU2NjQ4NTgsImV4cCI6MTUyNTc1MTI1OH0.ofOMvjwHAEkbAnMK7NC2xG3RneUlGGeTE52OC-Di06w'
}))

const getUser = require('../../../client/apiClient').getUser

const user = [
  {
    id: 129,
    user_id: 42,
    name: 'Arthur Dent',
    profilePhoto: 'www.dontbulldozemyhouse.com',
    email: 'dentarthur@gmail.com',
    expiryDate: '31/12/2020',
    membershipNumber: '0000420'
  }
]

nock('http://localhost')
  .get('/api/v1/user/profile')
  .reply(200, user)

test('getUser sends get req to server', () => {
  const expected = 129
  return getUser()
    .then(user => {
      const actual = user[0].id
      expect(actual).toBe(expected)
    })
})

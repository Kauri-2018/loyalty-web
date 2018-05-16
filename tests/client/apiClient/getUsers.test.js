import nock from 'nock'

jest.mock('../../../client/utils/localStorage', () => ({
  get: () => 'firstFakeTokenTest'
}))

const getUsers = require('../../../client/apiClient').getUsers

const users = [
  {
    id: 129,
    user_id: 42,
    name: 'Arthur Dent',
    profilePhoto: 'www.dontbulldozemyhouse.com',
    email: 'dentarthur@gmail.com',
    expiryDate: '31/12/2020',
    membershipNumber: '0000420'
  },
  {
    id: 111,
    user_id: 51,
    name: 'Bilbo Baggins',
    profilePhoto: 'www.bagginsofbagend.com',
    email: 'bilbobaggins@gmail.com',
    expiryDate: '31/11/2020',
    membershipNumber: '0000520'
  }
]

nock('http://localhost')
  .get('/api/v1/admin/users')
  .reply(200, users)

test('getUsers sends get req to server', () => {
  const expected = 2
  return getUsers()
    .then(users => {
      const actual = users.body.length
      expect(actual).toBe(expected)
    })
})

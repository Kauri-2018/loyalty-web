import nock from 'nock'

jest.mock('../../../client/utils/localStorage', () => ({
  get: () => 'firstFakeTokenTest'
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

test('getUser sends post req to server', () => {
  const expected = 129
  return getUser()
    .then(user => {
      const actual = user[0].id
      expect(actual).toBe(expected)
    })
})

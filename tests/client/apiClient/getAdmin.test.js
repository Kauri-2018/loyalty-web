import nock from 'nock'

jest.mock('../../../client/utils/localStorage', () => ({
  get: () => 'firstFakeTokenTest'
}))

const getAdmin = require('../../../client/apiClient').getAdmin

const admin = [
  {
    id: 4,
    username: 'hgranger',
    role: 'admin',
    name: 'Hermione Granger',
    profilePhoto: 'www.hogwartsphoto.com/hgranger/1996',
    email: 'hgrangerweasley@gmail.com',
    expiryDate: '31/09/2020',
    membershipNumber: '0000710'
  }
]

nock('http://localhost')
  .get('/api/v1/admin/profile')
  .reply(200, admin)

test('getAdmin sends get req to server', () => {
  const expected = 4
  return getAdmin()
    .then(admin => {
      const actual = admin[0].id
      expect(actual).toBe(expected)
    })
})

import nock from 'nock'

jest.mock('../../../client/utils/localStorage', () => ({
  get: () => 'firstFakeTokenTest'
}))

const getStatistics = require('../../../client/apiClient').getStatistics

const users = [
  {
    id: 1001,
    user_id: 29,
    timestamps: 1520113994934
  },
  {
    id: 1026,
    user_id: 31,
    timestamp: 1521280085693
  }
]

nock('http://localhost')
  .get('/api/v1/admin/stats')
  .reply(200, users)

test('getStatistics sends post req to server', () => {
  return getStatistics()
    .then(stats => {
      const actual = stats.body.length
      expect(actual).toBe(2)
    })
})

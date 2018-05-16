import nock from 'nock'

jest.mock('../../../client/utils/localStorage', () => ({
  get: () => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJkb24iLCJpYXQiOjE1MjU2NjQ4NTgsImV4cCI6MTUyNTc1MTI1OH0.ofOMvjwHAEkbAnMK7NC2xG3RneUlGGeTE52OC-Di06w'
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

test('getStatistics sends get req to server', () => {
  return getStatistics()
    .then(stats => {
      const actual = stats.body.length
      expect(actual).toBe(2)
    })
})

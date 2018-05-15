import nock from 'nock'

import {loginAdmin} from '../../../client/apiClient'

const message = 'Authentication successful'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJkb24iLCJpYXQiOjE1MjU2NjQ4NTgsImV4cCI6MTUyNTc1MTI1OH0.ofOMvjwHAEkbAnMK7NC2xG3RneUlGGeTE52OC-Di06w'

const responseDetails = {
  message,
  token
}

nock('http://localhost')
  .post('api/v1/admin/login')
  .reply(200, responseDetails)

test('registerAdmin sends post req to server', () => {
  const expected = token
  return loginAdmin(responseDetails)
    .then(res => {
      expect(res).toContain(expected)
    })
})

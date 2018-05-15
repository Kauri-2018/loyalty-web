import nock from 'nock'

import {registerAdmin} from '../../../client/apiClient'

const message = 'Successfully registered'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJkb24iLCJpYXQiOjE1MjU2NjQ4NTgsImV4cCI6MTUyNTc1MTI1OH0.ofOMvjwHAEkbAnMK7NC2xG3RneUlGGeTE52OC-Di06w'

const userDetails = {
  message,
  token
}

nock('http://localhost')
  .post('/api/v1/admin/register')
  .reply(200, userDetails)

test('registerAdmin sends post req to server', () => {
  const expected = token
  return registerAdmin(userDetails)
    .then(res => {
      expect(res).toBe(expected)
    })
})

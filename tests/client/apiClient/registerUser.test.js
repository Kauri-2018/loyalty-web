import nock from 'nock'

import {registerUser} from '../../../client/apiClient'

const message = 'Successfully registered'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJkb24iLCJpYXQiOjE1MjU2NjQ4NTgsImV4cCI6MTUyNTc1MTI1OH0.ofOMvjwHAEkbAnMK7NC2xG3RneUlGGeTE52OC-Di06w'

const userDetails = {
  message,
  token
}

nock('http://localhost')
  .post('/api/v1/user/register')
  .reply(200, userDetails)

test('registerUser sends post req to server', () => {
  const expected = token
  return registerUser(userDetails)
    .then(token => {
      expect(token).toBe(expected)
    })
})

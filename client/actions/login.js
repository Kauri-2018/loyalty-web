import {loginAdmin, getUser} from '../apiClient'
import {set} from '../utils/localStorage'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

function requestLogin () {
  return {
    type: LOGIN_REQUEST
  }
}

export function receiveLogin (user) {
  return {
    type: LOGIN_SUCCESS,
    user
  }
}

function loginError (message) {
  return {
    type: LOGIN_FAILURE,
    message
  }
}

export function administratorLogin (userDetails) {
  return dispatch => {
    dispatch(requestLogin())
    return loginAdmin(userDetails)
      .then(res => {
        if (res.status !== 200) {
          dispatch(loginError(res.body.message))
          return Promise.reject(res.body.message)
        } else {
          set('token', res.body.token)
          getUser()
            .then(user => {
              dispatch(receiveLogin(user))
            })
        }
      })
      .catch((err) => {
        // err.response.body.errorType: "NO_Authority"
        // err.message: "Bad Request"
        dispatch(loginError(err.response.body.errorType))
        return Promise.reject(err.response.body.errorType)
      })
  }
}

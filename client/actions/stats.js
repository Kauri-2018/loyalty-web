import {getStatistics, getUsers, getAdmin} from '../apiClient'

export const STATS_REQUEST = 'STATS_REQUEST'
export const STATS_SUCCESS = 'STATS_SUCCESS'
export const STATS_FAILURE = 'STATS_FAILURE'
export const USERS_REQUEST = 'USERS_REQUEST'
export const USERS_SUCCESS = 'USERS_SUCCESS'
export const USERS_FAILURE = 'USERS_FAILURE'
export const ADMIN_REQUEST = 'ADMIN_REQUEST'
export const ADMIN_SUCCESS = 'ADMIN_SUCCESS'
export const ADMIN_FAILURE = 'ADMIN_FAILURE'

function requestStats () {
  return {
    type: STATS_REQUEST
  }
}

export function receiveStats (stats) {
  return {
    type: STATS_SUCCESS,
    stats
  }
}

function statsError (message) {
  return {
    type: STATS_FAILURE,
    message
  }
}

function requestUsers () {
  return {
    type: USERS_REQUEST
  }
}

export function receiveUsers (users) {
  return {
    type: USERS_SUCCESS,
    users
  }
}

function usersError (message) {
  return {
    type: USERS_FAILURE,
    message
  }
}

export function requestAdmin () {
  return {
    type: ADMIN_REQUEST
  }
}

export function receiveAdmin (admin) {
  return {
    type: ADMIN_SUCCESS,
    admin
  }
}

export function adminError (message) {
  return {
    type: ADMIN_FAILURE,
    message
  }
}

export function getAdminInfo () {
  return dispatch => {
    dispatch(requestAdmin())
    return getAdmin()
      .then(res => {
        if (res.status !== 200) {
          dispatch(adminError(res.body.errorType))
          return Promise.reject(res.body.errorType)
        } else {
          dispatch(receiveAdmin(res.body))
        }
      })
      .catch((err) => {
        dispatch(adminError(err.response.body.errorType))
        return Promise.reject(err.response.body.errorType)
      })
  }
}

export function getStats () {
  return dispatch => {
    dispatch(requestStats())
    return getStatistics()
      .then(res => {
        if (res.status !== 200) {
          dispatch(statsError(res.body.errorType))
          return Promise.reject(res.body.errorType)
        } else {
          dispatch(receiveStats(res.body))
        }
      })
      .catch((err) => {
        // err.response.body.errorType: "NO_Authority"
        // err.message: "Bad Request"
        dispatch(statsError(err.response.body.errorType))
        return Promise.reject(err.response.body.errorType)
      })
  }
}

export function getUsersData () {
  return dispatch => {
    dispatch(requestUsers())
    return getUsers()
      .then(res => {
        if (res.status !== 200) {
          dispatch(usersError(res.body.errorType))
          return Promise.reject(res.body.errorType)
        } else {
          dispatch(receiveUsers(res.body))
        }
      })
      .catch((err) => {
        // err.response.body.errorType: "NO_Authority"
        // err.message: "Bad Request"
        dispatch(usersError(err.response.body.errorType))
        return Promise.reject(err.response.body.errorType)
      })
  }
}

import {getStatistics} from '../apiClient'

export const STATS_REQUEST = 'STATS_REQUEST'
export const STATS_SUCCESS = 'STATS_SUCCESS'
export const STATS_FAILURE = 'STATS_FAILURE'

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

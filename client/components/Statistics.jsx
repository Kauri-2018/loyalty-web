import React from 'react'
import {connect} from 'react-redux'

import {getStats, getUsersData} from '../actions/stats'

class Statistics extends React.Component {
  componentDidMount () {
    if (this.props.isAuth) {
      this.props.dispatch(getStats())
      this.props.dispatch(getUsersData())
    }
  }

  render () {
    return (
      <div className='statistics'>
        <h3>Statistics container</h3>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuthenticated,
    user: state.auth.user || {},
    stats: state.auth.stats || []
  }
}

export default connect(mapStateToProps)(Statistics)

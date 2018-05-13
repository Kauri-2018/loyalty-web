import React from 'react'
import {connect} from 'react-redux'

import {getStats, getUsersData} from '../actions/stats'
import StatsContainer from './StatsContainer'

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
        {this.props.isAuth
          ? <StatsContainer />
          : <p>Login first </p>
        }
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

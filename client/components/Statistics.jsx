import React from 'react'
import {connect} from 'react-redux'

import {getStats} from '../actions/stats'

class Statistics extends React.Component {
  componentDidMount () {
    if (this.props.isAuth) {
      this.props.dispatch(getStats())
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
    user: state.auth.user || {}
  }
}

export default connect(mapStateToProps)(Statistics)

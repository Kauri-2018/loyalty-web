import React from 'react'
import {connect} from 'react-redux'

import StatsContainer from './StatsContainer'

class Statistics extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
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
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated,
    user: state.auth.user || {}
  }
}

export default connect(mapStateToProps)(Statistics)

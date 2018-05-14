import React from 'react'
import {connect} from 'react-redux'

class AdminAccount extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    return (
      <div className='account-wrapper'>
        {this.props.isAuth
          ? <h3>Account stuff goes here</h3>
          : <p>Login first</p>
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

export default connect(mapStateToProps)(AdminAccount)

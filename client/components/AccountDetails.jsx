import React from 'react'
import {connect} from 'react-redux'

import {getAdminInfo} from '../actions/stats'

class AccountDetails extends React.Component {
  componentDidMount () {
    if (this.props.isAuth) {
      this.props.dispatch(getAdminInfo())
    }
  }

  render () {
    return (
      <div className='account-details-container'>
        {this.props.isAuth
          ? <div className='account-details-list'>
            <p>Username: {this.props.user.username}</p>
            <p>Name: {this.props.user.username}</p>
            <p>Role: {this.props.user.role}</p>
            <p>Employee Number: membership-number</p>
            <p>Login Expires: expiry-date</p>
          </div>
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

export default connect(mapStateToProps)(AccountDetails)

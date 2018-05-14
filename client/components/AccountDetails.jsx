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
            <img
              className='profile-photo'
              src={`${this.props.user.profilePhoto}`}
            />
            <p>Name: {this.props.user.name}</p>
            <p>Email: {this.props.user.email}</p>
            <p>Role: {this.props.user.membershipType}</p>
            <p>Employee Number: {this.props.user.membershipNumber}</p>
            <p>Login Expires: {this.props.user.expDate}</p>
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

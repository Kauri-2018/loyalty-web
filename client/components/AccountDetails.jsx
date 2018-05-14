import React from 'react'
import {connect} from 'react-redux'

import {getAdmin} from '../apiClient'

class AccountDetails extends React.Component {
  componentDidMount () {
    if (this.props.isAuth) {
      getAdmin()
    }
  }

  render () {
    return (
      <div className='account-details-container'>
        {this.props.isAuth
          ? <div className='account-details-list'>
            <img
              className='image is-128x128'
              src={`${this.props.user.profilePhoto}`}
            />
            <p>Name: {this.props.user.name}</p>
            <p>Email: {this.props.user.email}</p>
            <p>Role: {this.props.user.role}</p>
            <p>Employee Number: {this.props.user.membershipNumber}</p>
            <p>Login Expires: {this.props.user.expiryDate}</p>
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

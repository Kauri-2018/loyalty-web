import React from 'react'
import {connect} from 'react-redux'

class AccountDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    return (
      <div className='account-details-container'>
        {this.props.isAuth
          ? <div className='account-details-list'>
            <p>Username: username</p>
            <p>Name: name</p>
            <p>Role: admin</p>
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

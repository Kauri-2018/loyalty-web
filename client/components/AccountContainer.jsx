import React from 'react'
import {connect} from 'react-redux'

import AccountDetails from './AccountDetails'

class AccountContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    return (
      <div className='account-wrapper'>
        {this.props.isAuth
          ? <AccountDetails />
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

export default connect(mapStateToProps)(AccountContainer)

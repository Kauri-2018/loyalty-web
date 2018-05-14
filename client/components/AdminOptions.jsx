import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {logout} from '../actions/logout'

class AdminOptions extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  render () {
    return (
      <div className='adminoptions'>
        <Link to="/statistics"><button>Statistics</button></Link>
        <Link to="/new"><button>Add new users</button></Link>
        <Link to='/account'><button>My Account</button></Link>
        <button onClick={this.props.handleLogout}>Logout</button>
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

const mapDispatchToProps = dispatch => {
  return {
    handleLogout: () => dispatch(logout())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminOptions)

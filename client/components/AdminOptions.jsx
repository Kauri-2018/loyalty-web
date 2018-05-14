import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Logo from './Logo'
import {logout} from '../actions/logout'

class AdminOptions extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  render () {
    return (
      <div className='adminoptions tabs is-centered is-boxed'>
        <ul>
          <li>
            <Link to="/"><Logo /></Link>
          </li>
          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
          <li>
            <Link to="/new">Add New Users</Link>
          </li>
          <li>
            <Link to='/profile'>My Account</Link>
          </li>
          <li>
            <Link to="/adminlogin" onClick={this.props.handleLogout}>Logout</Link>
          </li>
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogout: () => dispatch(logout())
  }
}
export default connect(null, mapDispatchToProps)(AdminOptions)

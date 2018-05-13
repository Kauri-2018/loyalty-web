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
      <div className='adminoptions tabs is-centered'>
        <ul>
          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
          <li>
            <Link to="/new">Add new users</Link>
          </li>
          <li>
            <a onClick={this.props.handleLogout}>
              <span>Logout</span>
            </a>
          </li>
        </ul>
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

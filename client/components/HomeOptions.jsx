import React from 'react'

import {Link} from 'react-router-dom'

class HomeOptions extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    return (
      <div className='homeoptions tabs is-centered'>
        <ul>
          <li>
            <Link to="/adminlogin">Admin Login</Link>
          </li>
          <li>
            <Link to="/adminregister">Register as admin</Link>
          </li>
          <li>
            <Link to="/userRegister">Register as loyalty member</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default HomeOptions

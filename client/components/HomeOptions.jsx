import React from 'react'

import Logo from './Logo'
import {Link} from 'react-router-dom'

class HomeOptions extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    return (
      <div className='homeoptions tabs is-centered is-boxed'>
        <ul>
          <li>
            <Link to="/"><Logo /></Link>
          </li>
          <li>
            <Link to="/adminlogin">Admin Login</Link>
          </li>
          <li>
            <Link to="/adminregister">Register as Admin</Link>
          </li>
          <li>
            <Link to="/userRegister">Register as Loyalty Member</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default HomeOptions

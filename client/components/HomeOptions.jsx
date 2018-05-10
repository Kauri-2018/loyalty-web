import React from 'react'

import {Link} from 'react-router-dom'

class HomeOptions extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    return (
      <div className='homeoptions'>
        <h3>homeoptions container</h3>
        <Link to="/login"><button>Admin Login</button></Link>
        <Link to="/adminregister"><button>Register as admin</button></Link>
        <Link to="/userRegister"><button>Register as loyalty member</button></Link>
      </div>
    )
  }
}

export default HomeOptions

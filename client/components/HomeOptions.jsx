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
        <button>Admin Login</button>
        <button>Register as admin</button>
        <button>Register as loyalty member</button>
      </div>
    )
  }
}

export default HomeOptions

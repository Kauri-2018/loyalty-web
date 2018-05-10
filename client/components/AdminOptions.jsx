import React from 'react'

import {Link} from 'react-router-dom'

class AdminOptions extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    return (
      <div className='adminoptions'>
        <h3>Adminoptions container</h3>
        <Link to="/profile/statistics"><button>Statistics</button></Link>
        <Link to="/profile/new"><button>Add new users</button></Link>
      </div>
    )
  }
}

export default AdminOptions

import React from 'react'
import {connect} from 'react-redux'

import VisitorTable from './VisitorTable'
import TotalVisits from './TotalVisits'

class StatsContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.getUserProfile = this.getUserProfile.bind(this)
  }
  getUserProfile (name) {
    const usersArr = this.props.users
    const user = usersArr.filter(user => user.name === name)
    this.setState({user: user[0]})
  }
  render () {
    return (
      <div className='tile is-ancestor'>
        <div className="tile is-5 is-vertical is-parent">
          <div className="tile is-child box totals-container">
            <TotalVisits />
          </div>
          <div className="tile is-child box">
            <VisitorTable getUserProfile={this.getUserProfile} />
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
            {this.state.user && <p>{this.state.user.name}</p>}
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    users: state.auth.users || []
  }
}

export default connect(mapStateToProps)(StatsContainer)

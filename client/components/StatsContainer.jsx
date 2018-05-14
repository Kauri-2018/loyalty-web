import React from 'react'
import {connect} from 'react-redux'

import VisitorTable from './VisitorTable'
import TotalVisits from './TotalVisits'
import UserProfile from './UserProfile'

class StatsContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        name: 'Frank',
        photo_url: 'https://avatars1.githubusercontent.com/u/23534573?s=400&u=96435be280d7141e296a0fc9795877cb4fc66192&v=4',
        email: 'xuzy213@gmail.com',
        expiry_date: '14/05/3018',
        membership_number: '0000000'
      }
    }
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
            {<UserProfile user={this.state.user} />}
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

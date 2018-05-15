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
      <div className="column is-12">
        <section className="hero is-info welcome is-small">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Hello, Admin.
              </h1>
              <h2 className="subtitle">
                I hope you are having a great day!
              </h2>
            </div>
          </div>
        </section>

        <section className="info-tiles">
          <TotalVisits />
        </section>

        <div className="columns">
          <div className="column is-6">
            <div className="card events-card">
              <header className="card-header">
                <p className="card-header-title">
                  Members List
                </p>
              </header>
              <div className="card-table">
                <div className="content">
                  <VisitorTable getUserProfile={this.getUserProfile} />
                </div>
              </div>
              <footer className="card-footer">
                <a href="#" className="card-footer-item">View All</a>
              </footer>
            </div>
          </div>
          <div className="column is-6">
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

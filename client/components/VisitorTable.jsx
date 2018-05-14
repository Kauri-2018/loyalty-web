import React from 'react'
import {connect} from 'react-redux'

import Visitor from './Visitor'
import {countUserVisits, compareName} from '../utils/stats'

class VisitorTable extends React.Component {
  render () {
    const {getUserProfile, isStatsReceived, isUsersReceived, users, stats} = this.props
    return (
      <table className='table is-fullwidth visitor-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Visits</th>
          </tr>
        </thead>
        <tbody>
          {(isStatsReceived && isUsersReceived) &&
            countUserVisits(users, stats).sort(compareName)
              .map((visitor, index) => (
                <Visitor getUserProfile={getUserProfile} key={index} visitor={visitor} />))
          }
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => {
  return {
    isStatsReceived: state.auth.isStatsReceived,
    isUsersReceived: state.auth.isUsersReceived,
    users: state.auth.users || [],
    stats: state.auth.stats || []
  }
}

export default connect(mapStateToProps)(VisitorTable)

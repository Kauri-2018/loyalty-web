import React from 'react'
import {connect} from 'react-redux'

import Visitor from './Visitor'
import {countUserVisits} from '../utils/stats'

class VisitorTable extends React.Component {
  render () {
    const {isStatsReceived, isUsersReceived, users, stats} = this.props
    return (
      <div className='visitor-table'>
        <table className='table is-striped'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Number of Visits</th>
            </tr>
          </thead>
          <tbody>
            {(isStatsReceived && isUsersReceived) && countUserVisits(users, stats)
              .map((visitor, index) => (
                <Visitor key={index} visitor={visitor} />))
            }
          </tbody>
        </table>
      </div>
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

import React from 'react'
import {connect} from 'react-redux'

import Visitor from './Visitor'
import {countUserVisits, compareName} from '../utils/stats'

class VisitorTable extends React.Component {
  render () {
    const {isStatsReceived, isUsersReceived, users, stats} = this.props
    return (
      <table className='table is-fullwidth visitor-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Visits</th>
          </tr>
        </thead>
        <div className="is-scrollable">
          <tbody height="170px">
            {(isStatsReceived && isUsersReceived) &&
            countUserVisits(users, stats).sort(compareName)
              .map((visitor, index) => (
                <Visitor key={index} visitor={visitor} />))
            }
          </tbody>
        </div>
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

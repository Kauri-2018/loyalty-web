import React from 'react'
import {connect} from 'react-redux'

import {countTotalVisits, countTotalFriends} from '../utils/stats'

const TotalVisits = ({users, stats}) => (
  <nav className="level">
    <div className="level-item has-text-centered">
      <div>
        <p className="heading">Friends</p>
        <p className="title">{countTotalFriends(users)}</p>
      </div>
    </div>
    <div className="level-item has-text-centered">
      <div>
        <p className="heading">Visits</p>
        <p className="title">{countTotalVisits(stats)}</p>
      </div>
    </div>
  </nav>
)
const mapStateToProps = state => {
  return {
    users: state.auth.users || [],
    stats: state.auth.stats || []
  }
}

export default connect(mapStateToProps)(TotalVisits)

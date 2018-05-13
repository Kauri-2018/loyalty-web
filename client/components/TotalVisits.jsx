import React from 'react'
import {connect} from 'react-redux'

import {countTotalVisits, countTotalFriends} from '../utils/stats'

const TotalVisits = ({users, stats}) => (
  <div className='totals-container'>
    <div className='total-members'>
      <h3>Total Friends:</h3>
      <p>{countTotalVisits(stats)}</p>
    </div>
    <div className='total-visits'>
      <h3>Total visits:</h3>
      <p>{countTotalFriends(users)}</p>
    </div>
  </div>
)
const mapStateToProps = state => {
  return {
    users: state.auth.users || [],
    stats: state.auth.stats || []
  }
}

export default connect(mapStateToProps)(TotalVisits)

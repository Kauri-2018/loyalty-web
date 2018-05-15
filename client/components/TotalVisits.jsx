import React from 'react'
import {connect} from 'react-redux'

import {countTotalVisits, countTotalFriends} from '../utils/stats'

const TotalVisits = ({users, stats}) => (
  <div className="tile is-ancestor has-text-centered">
    <div className="tile is-parent">
      <article className="tile is-child box">
        <p className="heading">Friends</p>
        <p className="title">{countTotalFriends(users)}</p>
      </article>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child box">
        <p className="heading">Visits</p>
        <p className="title">{countTotalVisits(stats)}</p>
      </article>
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

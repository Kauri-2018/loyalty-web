import React from 'react'

const VisitorTable = ({user, totalVisits, lastVisit}) => (
  <tr className = 'visitor-table'>
    <td>{user}</td>
    <td>{totalVisits}</td>
    <td>{lastVisit}</td>
  </tr>
)

export default VisitorTable

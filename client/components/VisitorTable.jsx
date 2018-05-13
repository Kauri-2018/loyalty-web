import React from 'react'

import Visitor from './Visitor'

const VisitorTable = () => (
  <div className='visitor-table'>
    <table className='row'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Number of Visits</th>
        </tr>
      </thead>
      <tbody>
        <Visitor />
      </tbody>
    </table>
  </div>
)

export default VisitorTable

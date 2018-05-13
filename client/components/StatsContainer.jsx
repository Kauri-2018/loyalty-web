import React from 'react'

import VisitorTable from './VisitorTable'
import TotalVisits from './TotalVisits'

const StatsContainer = () => (
  <div className='totals-container'>
    <TotalVisits />
    <VisitorTable />
  </div>
)

export default StatsContainer

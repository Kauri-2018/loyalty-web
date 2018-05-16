import React from 'react'

class Visitor extends React.Component {
  render () {
    const {getUserProfile, visitor} = this.props
    return (
      <tr onClick={() => getUserProfile(visitor.name)} className="visitor-tr">
        <td>{visitor.name}</td>
        <td>{visitor.count}</td>
      </tr>
    )
  }
}

export default Visitor

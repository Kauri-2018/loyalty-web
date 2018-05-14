import React from 'react'

class Visitor extends React.Component {
  render () {
    const {getUserProfile, visitor} = this.props
    return (
      <tr>
        <td onClick={() => getUserProfile(visitor.name)}>{visitor.name}</td>
        <td>{visitor.count}</td>
      </tr>
    )
  }
}

export default Visitor

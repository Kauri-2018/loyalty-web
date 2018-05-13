import React from 'react'

const Visitor = (props) => (
  <tr>
    <td>{props.visitor.name}</td>
    <td>{props.visitor.count}</td>
  </tr>
)

export default Visitor

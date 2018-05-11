import React from 'react'
import {connect} from 'react-redux'

class ErrorMessage extends React.Component {
  render () {
    const message = this.props.message
    return (
      <p className="errormessage">{message}</p>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.auth.errorMessage
  }
}

export default connect(mapStateToProps)(ErrorMessage)

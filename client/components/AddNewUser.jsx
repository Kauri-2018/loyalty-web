import React from 'react'
import {connect} from 'react-redux'

class AddNewUser extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    return (
      <div className='addnewuser'>
        {this.props.isAuth
          ? <h3>addnewuser container</h3>
          : <p>Login first </p>
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated,
    user: state.auth.user || {}
  }
}

export default connect(mapStateToProps)(AddNewUser)

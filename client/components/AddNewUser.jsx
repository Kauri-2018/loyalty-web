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
      </div>
    )
  }
}
// const mapStateToProps = (state) => {
//   return {
//     isAuth: state.auth.isAuthenticated,
//     user: state.auth.user || {}
//   }
// }

export default connect(null)(AddNewUser)

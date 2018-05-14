import React from 'react'
import {connect} from 'react-redux'

import AdminOptions from './AdminOptions'

class AddNewUser extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    return (
      <div className='addnewuser'>
        <AdminOptions />
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

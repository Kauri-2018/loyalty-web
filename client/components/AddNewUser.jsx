import React from 'react'
import {connect} from 'react-redux'

class AddNewUser extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    return (
      <article className="message is-warning is-large">
        <div className="message-header message-header-padding">
          <p>Coming Soon</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          <strong>NO TIME</strong> to write the code yet.
        </div>
      </article>
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

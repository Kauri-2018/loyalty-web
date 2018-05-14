import React from 'react'
import {connect} from 'react-redux'

import {receiveLogin} from '../actions/login'
import {registerUser, getUser} from '../apiClient'
import ErrorMessage from './ErrorMessage'

class UserRegister extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitNewUser = this.submitNewUser.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitNewUser () {
    if (this.state.username && this.state.password && this.state.name) {
      registerUser({...this.state})
        .then(token => {
          // TODO Move to separate module at later stage
          localStorage.setItem('token', token)
        })
        .then(getUser)
        .then(user => this.props.loginUser(user))
        .then(() => this.props.history.push('/'))
    }
  }

  render () {
    return (
      <section className="hero is-light is-fullheight userregister">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Register</h3>
              <p className="subtitle has-text-grey">as Member</p>
              <ErrorMessage />
              <div className="box">
                <div className="field">
                  <div className="control">
                    <input className="input is-large" type="text" name='name' placeholder="Your Fullname" autoFocus="" onChange={this.handleChange} />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input is-large" type="text" name='username' placeholder="Your Username" autoFocus="" onChange={this.handleChange} />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input is-large" type="password" name='password' placeholder="Your Password" onChange={this.handleChange}/>
                  </div>
                </div>
                <button className="button is-block is-info is-large is-fullwidth" onClick={this.submitNewUser}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => {
      return dispatch(receiveLogin(user))
    }
  }
}

export default connect(null, mapDispatchToProps)(UserRegister)

import React from 'react'
import {connect} from 'react-redux'
import {administratorLogin} from '../actions/login'
import ErrorMessage from './ErrorMessage'

class AdminLogin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.attemptUserLogin = this.attemptUserLogin.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  attemptUserLogin () {
    if (this.state.username && this.state.password) {
      this.props.loginUser({...this.state})
        .then(() => this.props.history.push('/'))
    }
  }

  render () {
    return (
      <div className ='AdminLogin'>
        <h2>AdminLogin</h2>
        <ErrorMessage />
        <div><input type='text' name='username' placeholder='Username' onChange={this.handleChange}/></div>
        <div><input type='password' name='password' placeholder='Password' onChange={this.handleChange}/></div>
        <button onClick={this.attemptUserLogin}>Log in</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: loginData => {
      return dispatch(administratorLogin(loginData))
    }
  }
}

export default connect(null, mapDispatchToProps)(AdminLogin)

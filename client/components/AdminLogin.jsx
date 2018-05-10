import React from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/login'

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
        .then(() => this.props.history.push('/profile'))
    }
  }

  render () {
    return (
      <div className ='AdminLogin'>
        <h2>AdminLogin</h2>
        <div><input type='text' name='username' placeholder='Username' onChange={this.handleChange}/></div>
        <div><input type='password' placeholder='Password' name='password' onChange={this.handleChange}/></div>
        <button onClick={this.attemptUserLogin}>Log in</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: loginData => {
      return dispatch(login(loginData))
    }
  }
}

export default connect(null, mapDispatchToProps)(AdminLogin)

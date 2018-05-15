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
        .then(() => this.props.history.push('/statistics'))
    }
  }

  render () {
    return (
      <section className="hero is-light is-fullheight AdminLogin">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Login</h3>
              <p className="subtitle has-text-grey">Please login to proceed.</p>
              <ErrorMessage />
              <div className="box">
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
                <button className="button is-block is-info is-large is-fullwidth" onClick={this.attemptUserLogin}>Login</button>
              </div>
              <p className="has-text-grey">
                <a href="../">Sign Up</a> &nbsp;·&nbsp;
                <a href="../">Forgot Password?</a>
              </p>
            </div>
          </div>
        </div>
      </section>
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

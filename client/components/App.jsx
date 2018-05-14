import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Footer from './Footer'
import AdminRegister from './AdminRegister'
import UserRegister from './UserRegister'
import AdminLogin from './AdminLogin'
import AdminOptions from './AdminOptions'
import Statistics from './Statistics'
import AddNewUser from './AddNewUser'
import Logo from './Logo'
import {get} from '../utils/localStorage'
import {getAdmin} from '../apiClient'
import {receiveLogin} from '../actions/login'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.renderHome = this.renderHome.bind(this)
    this.renderProfile = this.renderProfile.bind(this)
    this.hasAuth = this.hasAuth.bind(this)
  }

  componentDidMount () {
    this.hasAuth()
  }

  hasAuth () {
    const token = get('token')
    if (token) {
      getAdmin()
        .then(admin => {
          this.props.dispatch(receiveLogin(admin))
        })
    }
  }
  renderHome () {
    return (
      <div className='container is-fluid'>
        <Route exact path='/' component={Home} />
        <Route path='/adminregister' component={AdminRegister} />
        <Route path='/userregister' component={UserRegister} />
        <Route path='/adminlogin' component={AdminLogin} />
      </div>
    )
  }

  renderProfile () {
    return (
      <div className='container is-fluid'>
        <Route exact path='/' component={AdminOptions} />
        <Route path='/statistics' component={Statistics} />
        <Route path='/new' component={AddNewUser} />
      </div>
    )
  }

  render () {
    return (
      <Router className='app'>
        <div className='container is-fluid'>
          <div className='container is-fluid logo'>
            <Logo />
          </div>
          {this.props.isAuth
            ? this.renderProfile()
            : this.renderHome()
          }
          <Footer />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated,
    user: state.auth.user || {}
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     handleLogout: () => dispatch(logout())
//   }
// }
export default connect(mapStateToProps)(App)

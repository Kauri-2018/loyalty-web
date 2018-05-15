import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Footer from './Footer'
import AdminRegister from './AdminRegister'
import UserRegister from './UserRegister'
import AdminLogin from './AdminLogin'
import AdminOptions from './AdminOptions'
import HomeOptions from './HomeOptions'
import Statistics from './Statistics'
import AddNewUser from './AddNewUser'
import AccountContainer from './AccountContainer'
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
      <div className='container is-fluid site-body'>
        <Route path='/adminregister' component={AdminRegister} />
        <Route path='/userregister' component={UserRegister} />
        <Route path='/adminlogin' component={AdminLogin} />
      </div>
    )
  }

  renderProfile () {
    return (
      <div className='container is-fluid site-body'>
        <Route path='/statistics' component={Statistics} />
        <Route path='/new' component={AddNewUser} />
        <Route path='/profile' component={AccountContainer} />
      </div>
    )
  }

  render () {
    return (
      <Router className='app'>
        <div>
          <section className="hero is-black is-bold">
            <div className="hero-foot">
              <nav className="tabs">
                <div className="container">
                  {this.props.isAuth
                    ? <Route path='/' component={AdminOptions} />
                    : <Route path='/' component={HomeOptions} />}
                </div>
              </nav>
            </div>
          </section>
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

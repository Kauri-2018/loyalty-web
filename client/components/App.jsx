import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './Home'
import Footer from './Footer'
import AdminRegister from './AdminRegister'
import UserRegister from './UserRegister'
import AdminLogin from './AdminLogin'
import AdminOptions from './AdminOptions'
// import Profile from './Profile'
// import NavBar from './NavBar'
// import Barista from './Barista'

const App = () => {
  return (
    <Router className='app'>
      <div className='app container'>
        <h1>Banner-placeholder</h1>
        <Switch>
          <Route path='/profile' component={ProfilePath} />
          <Route path='/' component={HomePath} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

const HomePath = () => (
  <div>
    <Route exact path='/' component={Home} />
    <Route path='/adminregister' component={AdminRegister} />
    <Route path='/userregister' component={UserRegister} />
    <Route path='/adminlogin' component={AdminLogin} />
  </div>
)

const ProfilePath = () => (
  <div>
    <Route exact path='/' component={AdminOptions} />
    <Route path='/statistics' component={Statistics} />
    <Route path='/new' component={AddNewUser} />
  </div>
)
export default App

import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './Home'
import AdminRegister from './AdminRegister'
import UserRegister from './UserRegister'
import Login from './AdminLogin'
// import Profile from './Profile'
// import NavBar from './NavBar'
// import Barista from './Barista'

const App = () => {
  return (
    <Router className='app'>
      <div className='app container'>
        <Switch>
          {/* <Route path='/barista' component={Barista} /> */}
          <Route path='/' component={AppPaths} />
        </Switch>
      </div>
    </Router>
  )
}

const AppPaths = () => (
  <div>
    <Route exact path='/' component={Home} />
    <Route path='/adminregister' component={AdminRegister} />
    <Route path='/userRegister' component={UserRegister} />
    <Route path='/login' component={Login} />
  </div>
)

export default App

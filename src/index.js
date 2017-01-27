import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './App/App'
import NotFound from './NotFound/NotFound'
import SignIn from './Auth/SignIn'
import Dashboard from './Dash/Dash'
import CreateUser from './CreateUser/CreateUser'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './index.css'

injectTapEventPlugin()

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="sign-in" component={SignIn} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="create-user" component={CreateUser} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
);

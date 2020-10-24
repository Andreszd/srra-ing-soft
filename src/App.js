import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AuthState from './context/Auth/authState'
import Auth from './views/Auth';
import Home from './views/Home';
const App = ()=> {
  return (  
    <AuthState>
      <Router>
        <Switch>
          <Route exact path="/Auth" component={Auth}/>  
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </AuthState>
  )
}
export default App;
  
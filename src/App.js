import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import AuthState from './context/Auth/authState'
import MessageState from './context/Message/MessageState'

import ProtectedRoute from './routes';
import Admin from './views/Admin';
import Auth from './views/Auth';
import Home from './views/Home';
const App = ()=> {
  return (  
    <AuthState>
      <MessageState>
        <Router>
          <Switch>
            <Route exact path="/auth" 
              render={(props)=>
                <ProtectedRoute path="/auth">
                  <Auth {...props}/>
                </ProtectedRoute>
              }
            />  
            <Route path="/home" 
              render={(props)=>
                <ProtectedRoute path="/home"> 
                    <Home  {...props}/>
                </ProtectedRoute>
              }
            />
            <Route path="/admin"
              render = {(props)=>
                <ProtectedRoute path="/admin">
                    <Admin {...props}/>
                </ProtectedRoute>
              }   
            />
            <Redirect path="/**" to="/auth"/>
          </Switch>
        </Router>
      </MessageState>
    </AuthState>
  )
}
export default App;
  
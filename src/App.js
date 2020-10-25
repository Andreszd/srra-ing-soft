import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AuthState from './context/Auth/authState'
import MessageState from './context/Message/MessageState'

import ProtectedRoute from './routes';
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
                <ProtectedRoute path="/Home">
                  <Auth {...props}/>
                </ProtectedRoute>
              }
            />  
            <Route path="/Home" 
              render={(props)=>
                <ProtectedRoute path="/auth"> 
                    <Home  {...props}/>
                </ProtectedRoute>
              }
            />
          </Switch>
        </Router>
      </MessageState>
    </AuthState>
  )
}
export default App;
  
import React from 'react';
import Auth from './views/Auth';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRouter from './routes'
import Home from './views/Home';
const App = ()=> {
  return (  
    <Router>
        <Route exact path="/" component={Auth}/>  
        
    </Router>
  )
}

export default App;
  
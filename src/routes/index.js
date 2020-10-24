import React,{ useContext } from 'react'
import { BrowserRouter as Router , Route } from 'react-router-dom'
import Auth from '../views/Auth';
import Home from '../views/Home';
import authContext from '../context/Auth/authContext'
const RoutesComponents = () => {
    const { autenticado } = useContext(authContext)

    return (
        <>
        {/* {
            autenticacion ?
            (<BrowserRouter>
                <Route path="/login" component={Auth}/>  
                <Route exact path="/" component={Home}/>
            </BrowserRouter>)
            : <Home/>
        } */}
            <Router>
                <Route exact path="/login" component={Auth}/>  
                <Route path="/" component={Home}/>
            </Router>

        </>
    );
}
 
export default RoutesComponents;
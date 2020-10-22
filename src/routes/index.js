import React from 'react'
import { BrowserRouter , Route } from 'react-router-dom'
import UploadForm from '../components/UploadForm';
import Auth from '../views/Auth';
import Home from '../views/Home';

const RoutesComponents = () => {
    let autenticacion = false
    return (
        <>
        {
            autenticacion ?
            (<BrowserRouter>
                <Route path="/login" component={Auth}/>  
                <Route exact path="/" component={Home}/>
            </BrowserRouter>)
            : <Home/>
        }
        </>
    );
}
 
export default RoutesComponents;
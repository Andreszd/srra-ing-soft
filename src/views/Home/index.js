import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../../components/Header';
import UploadForm from '../UploadDocument';
import Lobby from '../Lobby';
const Home = () => {
     
    return (
       <>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path='/Home/Principal' component={Lobby}/>
                    <Route path="/Home/upload" component={UploadForm}/>
                </Switch>
                
            </BrowserRouter>
       </> 
    );
}
 
export default Home;
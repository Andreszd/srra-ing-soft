import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../../components/Header';
import UploadForm from '../UploadDocument';
import MessageState from '../../context/Message/MessageState';
import Lobby from '../Lobby';
const Home = () => {
     
    return (
       <>
        <MessageState>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path='/Home/Principal' component={Lobby}/>
                    <Route path="/Home/upload" component={UploadForm}/>
                </Switch>
                
            </BrowserRouter>
        </MessageState>   
       </> 
    );
}
 
export default Home;
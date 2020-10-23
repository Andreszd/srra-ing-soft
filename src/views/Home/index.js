import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../../components/Header';
import UploadForm from '../../components/UploadForm';
import MessageState from '../../context/Message/MessageState';

const Home = () => {
    return (
       <>
            <MessageState>
                <BrowserRouter>
                        <Header />
                        <Route path="/upload" component={UploadForm}/>
                </BrowserRouter>
            </MessageState>
       </> 
    );
}
 
export default Home;
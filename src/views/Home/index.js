import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../../components/Header';
import UploadForm from '../../components/UploadForm';
const Home = () => {
    return (
       <>
            <BrowserRouter>
                <Header />
                <Route path="/upload" component={UploadForm}/>
            </BrowserRouter>
       </> 
    );
}
 
export default Home;
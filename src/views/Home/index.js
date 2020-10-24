import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from '../../components/Header';
import UploadForm from '../../components/ContainerUpload';
import MessageState from '../../context/Message/MessageState';
import AuthContext from '../../context/Auth/authContext'
const Home = ({ history }) => {
    const { autenticado } = useContext(AuthContext)
     useEffect(()=>{
        if(!autenticado){
            history.push('/Auth')
            return
        }   
    },[autenticado]) 
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
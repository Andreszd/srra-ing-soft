import React,{ useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import authContext from '../context/Auth/authContext'
const ProtectedRoute = ({ children, path }) => {
    const { authenticate, rol, authenticateUser  } = useContext(authContext)
    useEffect(()=>{
        authenticateUser()
    },[])
    switch(path){
        case '/auth':
            return (
            <>
                {
                        !authenticate ?
                            children
                        : 
                        rol === 'admin' ?
                        <Redirect to ="/admin"/>
                        : <Redirect to ="/home"/>

                }
            </>
            );
        case '/admin':
        return (
            <>
                {
                    rol === 'admin' ?
                        children    
                    :<Redirect to='/auth'/>
                } 
            </>
        )
        case '/home':
            return (
                <>
                    {
                    !authenticate ?
                        <Redirect to="/auth"/>
                    : children
                    }
                </>
            )
        
    }
    
}
 
export default ProtectedRoute;
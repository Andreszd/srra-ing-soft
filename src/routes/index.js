import React,{ useContext } from 'react'
import { Redirect } from 'react-router-dom'
import authContext from '../context/Auth/authContext'
import Home from '../views/Home'
const ProtectedRoute = ({ children, path }) => {
    const { authenticate } = useContext(authContext)
    switch(path){
        case '/auth':
            return (
            <>
                {
                    !authenticate ?
                        <Redirect to="/auth"/>
                    : children

                }
            </>
            );
        case '/Home':
            return (
                <>
                    {
                        !authenticate ?
                            children
                        : <Redirect to ="/Home"/>
                    }
                </>
            )

    }
}
 
export default ProtectedRoute;
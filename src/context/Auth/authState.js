import React,{ useReducer } from 'react'

import { USER_AUTHENTICATE } from '../../utils/types'

import AuthContext from './authContext'
import AuthReducer from './authReducer'

const AuthState = ({ children }) => {
    const initialState = {
        user: null,
        authenticate: false,
        rol: null
    }
    const [state, dispatch] = useReducer(AuthReducer, initialState)
    const { authenticate } = state

    const authenticateUser = user =>{
        dispatch({
            type: USER_AUTHENTICATE, 
            payload: user
        })
    }
    return ( 
        <AuthContext.Provider
            value={{
                authenticate,
                authenticateUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
export default AuthState;
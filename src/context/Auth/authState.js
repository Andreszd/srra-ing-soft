import React,{ useReducer } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'

const AuthState = ({ children }) => {
    const initialState = {
        usuario: null,
        authenticate: true,
        rol: null
    }
    const [state, dispatch] = useReducer(AuthReducer, initialState)
    const { authenticate } = initialState

    return ( 
        <AuthContext.Provider
            value={{
                authenticate
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
 
export default AuthState;
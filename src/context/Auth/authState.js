import React,{ useReducer } from 'react'

import { USER_AUTHENTICATE,
        ERROR_AUTHENTICATE_USER } from '../../utils/types'

import AuthContext from './authContext'
import AuthReducer from './authReducer'
import clientAxios from '../../config/axios'

const AuthState = ({ children }) => {
    const initialState = {
        user: null,
        authenticate: false,
        rol: null,
        messageError:null
    }
    const [state, dispatch] = useReducer(AuthReducer, initialState)
    const { authenticate, messageError, rol } = state

    const signIn = async (user) =>{
        try {
            const response = await clientAxios.post('api/login-user', user)
            
            dispatch({
                type: USER_AUTHENTICATE, 
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: ERROR_AUTHENTICATE_USER,
                payload: error.response.data.message
            })
        }
    }
    return ( 
        <AuthContext.Provider
            value={{
                rol,
                authenticate,
                signIn,
                messageError
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
export default AuthState;
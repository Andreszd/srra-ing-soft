import React,{ useReducer } from 'react'

import { USER_AUTHENTICATE,
        ERROR_AUTHENTICATE_USER,
        SIGN_IN_USER } from '../../utils/types'

import AuthContext from './authContext'
import AuthReducer from './authReducer'
import clientAxios from '../../config/axios'
import defineHeaders from '../../config/token'

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
            //console.log(response)
            dispatch({
                type: SIGN_IN_USER, 
                payload: response.data
            })
            authenticateUser()
        } catch (error) {
            if(!error) return

            console.log(error)
            dispatch({
                type: ERROR_AUTHENTICATE_USER,
                payload: error.response.data.message
            }) 
        }
    }
    const authenticateUser = async ()=>{
        const token = localStorage.getItem('token')
        if(token){
            defineHeaders(token)
        }
        try {
            const response  = await clientAxios.get('api/auth') 
            console.log(response)
            dispatch({
                type: USER_AUTHENTICATE,
                payload: response.data.user
            })
        } catch (error) {
           console.log(error.response.data)       
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
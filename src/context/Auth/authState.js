import React,{ useReducer } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'

const AuthState = ({ children }) => {
    const initialState = {
        usuario: null,
        autenticado: true,
        rol: null
    }
    const [state, dispatch] = useReducer(AuthReducer, initialState)
    const {usuario, autenticado} = initialState

    return ( 
        <AuthContext.Provider
            value={{
                autenticado
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
 
export default AuthState;
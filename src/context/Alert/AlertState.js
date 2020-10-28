import React,{ useReducer } from 'react'

import AlertContext from './AlertContext'
import alertReducer from './AlertReducer'

import { SHOW_ALERT, HIDDEN_ALERT } from '../../utils/types'
const MessageState = ({ children })=>{
    const initialState = {
        message: null,
        typeAlert : false
    }
    const [state, dispatch] = useReducer(alertReducer, initialState)

    const { message, typeAlert } = state
    const showAlert =( message, type )=>{
        dispatch({
            type: SHOW_ALERT,
            payload: {
                message,
                type
            }
        })            
        setTimeout(()=>{
            hiddenAlert()
        },3000)
    }
    const hiddenAlert =()=>{
        dispatch({
            type: HIDDEN_ALERT
        })   
    }
    return(
        <AlertContext.Provider 
            value={{
                typeAlert,
                message,
                showAlert,
                hiddenAlert

            }}
        >
            {children}
        </AlertContext.Provider>        
    )
}
export default MessageState
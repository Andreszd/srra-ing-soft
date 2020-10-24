import React,{ useReducer } from 'react'
import MessageContext from './MessageContext'
import alertReducer from './AlertReducer'
const MessageState = ({ children })=>{
    const initialState = {
        message: null
    }
    const [state, dispatch] = useReducer(alertReducer, initialState)

    const { message } = state
    const showAlert =( message, type )=>{
        dispatch({
            type: 'SHOW_ALERT',
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
            type: 'HIDDEN_ALERT'
        })   
    }
    return(
        <MessageContext.Provider 
            value={{
                showAlert,
                message,
                hiddenAlert

            }}
        >
            {children}
        </MessageContext.Provider>        
    )
}
export default MessageState
import React,{ useState } from 'react'
import MessageContext from './MessageContext'

const MessageState = ({ children })=>{
    const [message, setMessage] = useState(null)
    return(
        <MessageContext.Provider 
            value={{
                setMessage,
                message
            }}
        >
            {children}
        </MessageContext.Provider>        
    )
}
export default MessageState
import React,{ useContext } from 'react'
import MessageContext from '../../context/Message/MessageContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group'

import '../../scss/blocks/message.scss'
const PopUpMessage = () => {
    const { message, setMessage } = useContext(MessageContext)

    const handleClosed = e =>{
        setMessage(null)
    }    
    return ( 
        <>
        {
            message ?
            <CSSTransition
                appear
                in
                classNames="message-transition" 
                timeout={300}
            >
                <div className="message">
                    <p className="message__text">{message.message}</p>
                    <button className="message__button" onClick={handleClosed}>
                        <FontAwesomeIcon className="message__icon" icon={ faTimesCircle } />
                    </button>
                </div>
            </CSSTransition>

            :null
        }
        </>
    );
}
 
export default PopUpMessage;
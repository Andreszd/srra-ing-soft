import React,{ useContext } from 'react'
import MessageContext from '../../context/Message/MessageContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group'

import '../../scss/blocks/alert.scss'
const PopUpMessage = () => {
    const { message, hiddenAlert} = useContext(MessageContext)

    const handleClosed = e =>{
        hiddenAlert()
    }    
    return ( 
        <>
        {
            message ?
            <CSSTransition
                appear
                in
                classNames="alert-transition" 
                timeout={300}
            >
                <div className="alert">
                    <p className="alert__text">{message}</p>
                    <button className="alert__button" onClick={handleClosed}>
                        <FontAwesomeIcon className="alert__icon" icon={ faTimesCircle } />
                    </button>
                </div>
            </CSSTransition>
            :null
        }
        </>
    );
}
 
export default PopUpMessage;
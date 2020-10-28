import React,{ useContext } from 'react'
import alertContext from '../../context/Alert/AlertContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group'

import '../../scss/blocks/alert.scss'
const PopUpMessage = () => {
    const { message,typeAlert, hiddenAlert} = useContext(alertContext)

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
                <div className={ typeAlert ? 'alert alert--green' : 'alert alert--red' }>
                    <p className="alert__text">{message}</p>
                    <button className="alert__button" onClick={()=> hiddenAlert()}>
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
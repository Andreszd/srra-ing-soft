import React,{ useContext } from 'react'
import alertContext from '../../context/Message/MessageContext'
import { CSSTransition } from 'react-transition-group'
import '../../scss/blocks/alert.scss'
const AuthAlert = () => {
    const { message } = useContext(alertContext)

    return ( 
        message ? 
        <CSSTransition
            appear
            in
            classNames="alert-auth-transition"
            timeout={300}
        >
            <div className="alert-auth">
                <p className="alert-auth__message">{ message }</p>
            </div>
        </CSSTransition>
        :null
    );
}
export default AuthAlert;
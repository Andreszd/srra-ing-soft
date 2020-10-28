import React,{ useContext } from 'react'
import { CSSTransition } from 'react-transition-group'
import '../../scss/blocks/alert.scss'

import alertContext from '../../context/Alert/AlertContext'
import authContext from '../../context/Auth/authContext'
const AuthAlert = () => {
    const { message } = useContext(alertContext)
    const { messageError } = useContext(authContext)

    return ( 
        message || messageError? 
        <CSSTransition
            appear
            in
            classNames="alert-auth-transition"
            timeout={300}
        >
            <div className="alert-auth">
                <p className="alert-auth__message">{ message || messageError}</p>
            </div>
        </CSSTransition>
        :null
    );
}
export default AuthAlert;
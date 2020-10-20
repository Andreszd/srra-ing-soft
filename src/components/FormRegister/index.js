import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'

import '../../scss/blocks/Form.scss'
const FormRegister = ({ setForm }) => {
    return ( 
        <form action="" className="form">
            <div className="form__header">
                <h2 className="form__title">Sign Up</h2>
                <p className="form__text">Sign up to collect your documentation</p>
            </div>
            <div className="form-input">
                <input type="text" placeholder="User Name" className="form-input__item"/>
                <i className="form-input__icon">
                    <FontAwesomeIcon icon={faUsers}/>
                </i>
            </div>
            <div className="form-input">
                <input type="text" placeholder="Full Name" className="form-input__item"/>
                <i className="form-input__icon">
                    <FontAwesomeIcon icon={faUser} />
                </i>
            </div>
            <div className="form-input">
                <input type="email" placeholder="Email " className="form-input__item"/>
                <i className="form-input__icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                </i>
            </div>
            <div className="form-input">
                <input type="password" placeholder="Password" className="form-input__item"/>
                <i className="form-input__icon">
                    <FontAwesomeIcon icon={faLock} />
                </i>
            </div>
            <div className="form-input">
                <input type="submit" value="Create your account" className="form-input__submit"/>
            </div>
            <section className="form__footer">
                <p className="form-footer__text"> Already registered ?
                    <a className="text-link" onClick={()=> setForm(true)}>Sign in</a>
                </p>
            </section>
        </form>
    );
}
 
export default FormRegister;
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import useForm from '../../hooks/useForm'

import { Link } from 'react-router-dom'
import '../../scss/blocks/Form.scss'
const FormLogin = ({ setForm }) => {
    const [ handleSubmit, handleInputChange ] = useForm({
        email:'',
        password:''
    })
    console.log('renderizado')
    return (
        <form action="" className="form" onSubmit={ handleSubmit }>
            <div className="form__header">
                <h2 className="form__title">Welcome</h2>
                <p className="form__text">Sign into your account here</p>
            </div>
            <div className="form-input">
                <input type="email" placeholder="Email / username" 
                name="email"
                className="form-input__item" 
                onChange ={handleInputChange}/>
                <i className="form-input__icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                </i>
            </div>
            <div className="form-input">
                <input type="password" placeholder="Password"
                onChange ={handleInputChange}
                className="form-input__item" name="password"/>
                <i className="form-input__icon">
                    <FontAwesomeIcon icon={faLock} />
                </i>
            </div>
            <div className="form-input">
                <input type="submit" value="Sign in" className="form-input__submit"/>
            </div>
            <section className="form__footer">
                <p className="form-footer__text">Forgot password ?
                     <Link to="" className="text-link">Reset</Link>
                </p>
                <p className="form-footer__text">Dont have an account 
                    <a className="text-link" onClick={()=> setForm(false)}>Sign up</a>
                </p>
            </section>
        </form>
    );
}
 
export default FormLogin;
import React, { useState, useContext, useEffect } from 'react'

import FormLogin from '../../components/FormLogin'
import FormRegister from '../../components/FormRegister'
import AuthAlert from '../../components/PopUpMessage/AuthAlert'
import authContext from '../../context/Auth/authContext'

import '../../scss/blocks/Container.scss'
const Auth = ({ history }) => {
    const [form, setForm] = useState(true)
    const { authenticate } = useContext(authContext)
    useEffect(()=>{
        if(authenticate === true){
            history.push('/home')
        }
    },[authenticate])
    return (
        <div className="container--form">
            <AuthAlert />
            <div className="container__form">
                {
                    form ?
                    <FormLogin setForm={setForm}/>
                    :
                    <FormRegister setForm={setForm}/>
                }
            </div>
        </div>
    );
}
export default Auth;
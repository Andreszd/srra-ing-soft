import React, { useState } from 'react'

import FormLogin from '../../components/FormLogin'
import FormRegister from '../../components/FormRegister'
import AuthAlert from '../../components/PopUpMessage/AuthAlert'


import '../../scss/blocks/Container.scss'
const Auth = () => {
    const [form, setForm] = useState(true)

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
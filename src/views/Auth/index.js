import React, { useState, useContext, useEffect } from 'react'
import FormLogin from '../../components/FormLogin'
import FormRegister from '../../components/FormRegister'
import AuthContext from '../../context/Auth/authContext'
import '../../scss/blocks/Container.scss'
const Auth = ({history}) => {
    const [form, setForm] = useState(true)
    const { autenticado } = useContext(AuthContext)
    
    useEffect(() => {
        if(autenticado){
            history.push('/')
        }
    }, [autenticado])

    return (
        <div className="container--form">
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
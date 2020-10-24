import { useState } from 'react'
import { isEmail } from '../utils'

const useForm = (initialState = null) => {
    const [inputs, setInputs] = useState(initialState)
    const inputsErrors = ()=>{
        const props = Object.values(inputs)
        const errors = props.filter(value => value.length === 0)
        if (errors.length > 0) return 'fields not completed' 
    }
    const handleInputChange = e =>{
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }
    return [ handleInputChange, inputsErrors, inputs ];
}
export default useForm;
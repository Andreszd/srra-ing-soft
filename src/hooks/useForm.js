import { useState } from 'react'

const useForm = (initialState = null) => {
    const [inputs, setInputs] = useState(initialState)
    const handleSubmit = e =>{
        if( e ) e.preventDefault()
        const objProps = Object.values(inputs)
        const res = objProps.filter(value => value.length === 0)
        if(res.length > 1) {
            console.log('error..')
        }else{

        }
    }
    const handleInputChange = e =>{
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }
    return [ handleSubmit, handleInputChange, setInputs ];
}
export default useForm;
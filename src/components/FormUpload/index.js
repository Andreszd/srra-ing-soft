import React,{ useRef, useEffect, useState, useContext } from 'react'
import MessageContext from '../../context/Message/MessageContext'
import { isEmpty } from '../../utils'


import '../../scss/blocks/form-upload.scss'
const FormUpload = ({ file }) => {
    const inputRef = useRef(null)

    const { setMessage } = useContext(MessageContext)

    const initialState = {
        title:'',
        teacher:'',
        subject:'',
        description:''
    }    

    useEffect(()=>{
        const input = inputRef.current
        const { name } = file
        input.value = name.split('.')[0]        
    },[])

    const [form, setForm] = useState(initialState)
    const handleSubmit = e =>{
        e.preventDefault()
        if(isEmpty(form)){
            setMessage({
                message:'Rellene todos los campos'
            })
        }else{
            console.log('enviando')
        }
    }
    const handleInputChange = e =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return ( 
        <form action="" className="form-upload" onSubmit={handleSubmit}>
           <label htmlFor="title-form" className="form-upload__label">Title</label>
           <input type="text" ref={inputRef} name="title" className="form-upload__input"
            onChange={handleInputChange}
           id="title-form" />  

           <label htmlFor="" className="form-upload__label">Subject</label>
           <select name="subject" id=""  className="form-upload__input" onChange={handleInputChange}>
               <option  value="" defaultValue disabled>-Select to Subject-</option>
               <option value="1">Rosemary</option>
           </select>
           <label htmlFor="" className="form-upload__label">Teacher </label>
           <select name="teacher" id="" className="form-upload__input" onChange={handleInputChange}> 
                <option  value="" defaultValue disabled>-Select to Teacher-</option> 
                <option value="2">Ing de soft</option>
           </select>
           <label htmlFor="description-form" className="form-upload__label">Description</label>
           <textarea name="description" 
           onChange={handleInputChange}
           id="description-form" className="form-upload__text-area"></textarea>
           <button type="submit" className="form-upload__button">Done</button>
           <button className="form-upload__button">Cancel</button>
        </form>
    );
}
 
export default FormUpload;
import React,{useRef, useState, useContext } from 'react'
import MessageContext from '../../context/Message/MessageContext'
import { verifyFields } from '../../utils'


import '../../scss/blocks/form-upload.scss'
const FormUpload = ({ file, setFile }) => {
    const inputRef = useRef(null)

    const { setMessage } = useContext(MessageContext)

    const initialState = {
        title: file.name.split('.')[0],
        teacher:'',
        subject:'',
        description:''
    }    

    const [form, setForm] = useState(initialState)
    const handleSubmit = e =>{
        e.preventDefault()
        
        const alert = verifyFields(form)
        if(alert.length > 0){
            setMessage({
                message: alert
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
    const handleButtonCancel = e =>{
        setFile(null)
    }
    return ( 
        <form action="" className="form-upload" onSubmit={handleSubmit}>
           <label htmlFor="title-form" className="form-upload__label">Title</label>
           <input type="text" ref={inputRef} name="title" className="form-upload__input"
            value={form.title}
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
           <button className="form-upload__button" onClick={handleButtonCancel}>Cancel</button>
        </form>
    );
}
 
export default FormUpload;
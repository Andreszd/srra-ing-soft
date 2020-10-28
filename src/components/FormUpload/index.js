import React,{useRef, useContext } from 'react'

import { validateStringSize } from '../../utils'

import alertContext from '../../context/Alert/AlertContext'
import fileContext from '../../context/File/fileContext'

import useForm from '../../hooks/useForm'

import '../../scss/blocks/form-upload.scss'
const FormUpload = ({ file, setFile }) => {
    const inputRef = useRef(null)

    const { showAlert } = useContext(alertContext)
    const { uploadFile } = useContext(fileContext)

    const initialState = {
        title: file.name.split('.')[0],
        teacher:'',
        subject:'',
        description:'',
        url: file.preview
    }    

    const [ handleInputChange, inputsErrors, inputs ] = useForm(initialState)
    const handleSubmit = e =>{
        e.preventDefault()        
        
        const errors = inputsErrors()

        if( errors ) return showAlert(errors, false)

        const alertStringSize = 'the size of the title exceeds the established'        

        if(validateStringSize( 50 , inputs.title)) return showAlert(alertStringSize, false)

        if(validateStringSize( 100, inputs.description)) return showAlert(alertStringSize, false)

        file = {...file, name : inputs.title}
        console.log(file)
        
        const formData = new FormData();
        formData.append('file', file);
        //uploadFile(formData)
        showAlert('File uploaded', true)
        setFile(null)
    }

    return ( 
        <form action="" className="form-upload" onSubmit={handleSubmit}>
           <label htmlFor="title-form" className="form-upload__label">Title</label>
           <input type="text" ref={inputRef} name="title" className="form-upload__input"
            value={inputs.title}
            onChange={handleInputChange}
            id="title-form" />  

           <label htmlFor="" className="form-upload__label">Subject</label>
           <select name="subject" id=""  className="form-upload__input" onChange={handleInputChange}>
               <option  value="" defaultValue >-Select to Subject-</option>
               <option value="1">Rosemary</option>
           </select>
           <label htmlFor="" className="form-upload__label">Teacher </label>
           <select name="teacher" id="" className="form-upload__input" onChange={handleInputChange}> 
                <option  value="" defaultValue >-Select to Teacher-</option> 
                <option value="2">Ing de soft</option>
           </select>
           <label htmlFor="description-form" className="form-upload__label">Description</label>
           <textarea name="description" 
           onChange={handleInputChange}
           id="description-form" className="form-upload__text-area"></textarea>
           <button type="submit" className="form-upload__button">Done</button>
           <button className="form-upload__button" onClick={()=>setFile(null)}>Cancel</button>
        </form>
    );
}
 
export default FormUpload;
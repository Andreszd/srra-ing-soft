import React,{ useRef, useEffect } from 'react'

import '../../scss/blocks/form-upload.scss'
const FormUpload = ({ file }) => {
    const inputRef = useRef(null)
    useEffect(()=>{
        const input = inputRef.current
        const { name } = file
        input.value = name.split('.')[0]
    },[])
    return ( 
        <form action="" className="form-upload">
           <label htmlFor="title-form" className="form-upload__label">Title</label>
           <input type="text" ref={inputRef} className="form-upload__input" id="title-form" />  
           <label htmlFor="" className="form-upload__label">Subject</label>
           <select name="" id="" className="form-upload__input">
               <option value="" selected disabled>-Select to Subject-</option>
           </select>
           <label htmlFor="" className="form-upload__label">Teacher </label>
           <select name="" id="" className="form-upload__input">
               <option value="" selected disabled>-Select to Teacher-</option>
           </select>
           <label htmlFor="description-form" className="form-upload__label">Description</label>
           <textarea name="" id="description-form" className="form-upload__text-area"></textarea>
           <button type="submit" className="form-upload__button">Done</button>
           <button className="form-upload__button">Cancel</button>
        </form>
    );
}
 
export default FormUpload;
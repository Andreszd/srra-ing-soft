import React,{ useReducer } from 'react'
import { UPLOAD_FILE_SUCCESFULY } from '../../utils/types'
import clientAxios from '../../config/axios'

import FileContext from './fileContext'
import fileReducer from './fileReducer'
const FileState = ({ children }) =>{
    const initialState = {
       file:null, 
       alert: null
    }
    const [state, dispatch] = useReducer(fileReducer, initialState)

    const uploadFile = async (file) =>{
        try {
            const response = await clientAxios.post('/api/files/upload', file,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(response)
            dispatch({
                type: UPLOAD_FILE_SUCCESFULY,
                payload: response.data
            })
        } catch (error) {
            console.log(error.response)
        }
    }
    const uploadInfoFile = (file) =>{
        try {
                           
        }catch (error) {
            
        }
    }
    return ( 
        <FileContext.Provider
            value={{
                uploadFile
            }}
        >
            {children}
        </FileContext.Provider>
    );
}
 
export default FileState;
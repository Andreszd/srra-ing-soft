import React,{ useState } from 'react'

import '../../scss/blocks/container-form-upload.scss'
import '../../scss/blocks/drop-zone.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

import { useDropzone } from 'react-dropzone'
import DocumentPreview from '../DocumentPreview'
import FormUpload from '../FormUpload'

const ContainerUploadForm = () => {
    const [file, setFile] = useState(null)
    const { getRootProps, getInputProps, open } = useDropzone({
        accept: "application/pdf",
        onDrop: acceptedFile =>{
            const [File] = acceptedFile
            setFile(
                Object.assign(File, {
                    preview: URL.createObjectURL(File)
                })
            )
        }
    })
    return ( 
        <div className="container__form-upload">
            <div action="" className="content-form-upload">
                <h2 className="content-form-upload__title">Contribute to the Comunity</h2>
                <p className="content-form-upload__text">Publish to the world Presentations, 
                research papers, legal documents, and more</p>
                {
                     file ?
                        <div className="form-upload__document-preview">   
                            <DocumentPreview file={file}/>                            
                            <FormUpload />                            
                        </div>   
                    :
                    <div {...getRootProps()} className="drop-zone">
                        <FontAwesomeIcon icon={faFilePdf} className="drop-zone__icon"/>
                        <input { ...getInputProps() }/>
                        <button type="button" onClick={open} className="drop-zone__button">Select file </button>
                        <p className="drop-zone__text">or drag & drop</p>
                    </div>
                }
            </div>
        </div>
    );
}
 
export default ContainerUploadForm;
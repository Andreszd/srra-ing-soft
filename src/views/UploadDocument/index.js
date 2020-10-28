import React,{ useState, useContext } from 'react'

import '../../scss/blocks/container-form-upload.scss'
import '../../scss/blocks/drop-zone.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

import { useDropzone } from 'react-dropzone'
import alertContext from '../../context/Alert/AlertContext'
import DocumentPreview from '../../components/DocumentPreview'
import FormUpload from '../../components/FormUpload'

import PopUpMessage from '../../components/PopUpMessage'

const ContainerUpload = () => {
    const [file, setFile] = useState(null)

    const { showAlert } = useContext(alertContext)

    const { getRootProps, getInputProps, open } = useDropzone({
        accept: "application/pdf",
        minSize:0,
        maxSize: 1048576,
        onDrop: acceptedFile =>{
            if (acceptedFile.length === 0) return
            console.log(acceptedFile)
            const [File] = acceptedFile
            setFile(
                Object.assign(File, {
                    preview: URL.createObjectURL(File)
                })
            )
        },
        onDropRejected: deniedFile =>{
            const { errors } = deniedFile[0]
            const { message }= errors[0]
            showAlert(message, false)
        } 
    })
    return ( 
        <div className="container__form-upload">
            <PopUpMessage />
            <div action="" className="content-form-upload">
                <h2 className="content-form-upload__title">Contribute to the Comunity</h2>
                <p className="content-form-upload__text">Publish to the world Presentations, 
                research papers, legal documents, and more</p>
                {
                     file ?
                        <div className="content-form-upload__document-preview">  
                            <DocumentPreview file={file}/>                            
                            <FormUpload file={file} setFile={setFile} />                            
                        </div>   
                    :
                    <>
                    <div {...getRootProps()} className="drop-zone">
                        <FontAwesomeIcon icon={faFilePdf} className="drop-zone__icon"/>
                        <input { ...getInputProps() }/>
                        <button type="button" onClick={open} className="drop-zone__button">Select file </button>
                        <p className="drop-zone__text">or drag & drop</p>
                    </div>
                        <p className="content-form-upload__text">Supported file types: Only Pdf's</p>
                    </>
                }
            </div>
        </div>
    );
}
 
export default ContainerUpload;
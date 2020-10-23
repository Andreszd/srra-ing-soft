import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

import '../../scss/blocks/preview-document.scss';
const DocumentPreview = ({ file }) => {
    return ( 
       <div className="preview-document">
           <a href={file.preview} target="_blank" className="prevew-document__link">
                <FontAwesomeIcon icon={faFilePdf} className="preview-document__icon"/>
           </a>
            <h2 className="preview-document__title">Document title</h2>
            <p className="preview-document__text">{ file.name }</p>
        </div> 
    );
}
 
export default DocumentPreview;
import { UPLOAD_FILE_SUCCESFULY } from '../../utils/types'

const fileReducer = (state, action) =>{
    switch (action.type) {
        case UPLOAD_FILE_SUCCESFULY:
            return {
                ...state,
                alert: action.payload.message
            }
        default:
            break;
    }
}

export default fileReducer
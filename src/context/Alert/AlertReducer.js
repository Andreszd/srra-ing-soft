import { SHOW_ALERT, HIDDEN_ALERT } from '../../utils/types'

const AlertReducer = (state, action) =>{
    switch(action.type){
        case SHOW_ALERT:
            return {
                ...state,
                message: action.payload.message,
                typeAlert: action.payload.type
            }
        case HIDDEN_ALERT: 
            return {
                message: null,
                typeAlert: false
            }
    }
}
export default AlertReducer
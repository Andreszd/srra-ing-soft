
const AlertReducer = (state, action) =>{
    switch(action.type){
        case 'SHOW_ALERT':
            return {
                ...state,
                message: action.payload.message,
                type: action.payload.type
            }
        case 'HIDDEN_ALERT':
            return {
                message: null
            }
    }
}
export default AlertReducer
import { USER_AUTHENTICATE,
        ERROR_AUTHENTICATE_USER,
        SIGN_IN_USER  } from '../../utils/types'

const AuthReducer = (state, action) =>{
    switch(action.type){
        case USER_AUTHENTICATE:
            return {
                ...state,
                user: action.payload.iduser,
                authenticate: true,
                rol: action.payload.rol
            }
        case ERROR_AUTHENTICATE_USER :
            return {
                ...state,
                messageError: action.payload
            }
        case SIGN_IN_USER:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state
            }
        default : return null
    }
}
export default AuthReducer
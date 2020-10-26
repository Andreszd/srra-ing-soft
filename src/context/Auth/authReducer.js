import { USER_AUTHENTICATE,
        ERROR_AUTHENTICATE_USER  } from '../../utils/types'

const AuthReducer = (state, action) =>{
    switch(action.type){
        case USER_AUTHENTICATE:
            return {
                ...state,
                user: action.payload.user,
                authenticate: true,
                rol: action.payload.rol
            }
        case ERROR_AUTHENTICATE_USER :
            return {
                ...state,
                messageError: action.payload
            }
    }
}
export default AuthReducer
import { USER_AUTHENTICATE } from '../../utils/types'

const AuthReducer = (state, action) =>{
    switch(action.type){
        case USER_AUTHENTICATE:
            return {
                ...state,
                user: action.payload,
                authenticate: true
            }
    }
}
export default AuthReducer
import { LOGOUT, SET_USER } from "../../constants/auth";

export const authReducer = ( state = {}, action) => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                isAuth: true
            }
        case LOGOUT: 
            return {
                ...state,
                user: null,
                isAuth: false
            }
        default: 
            return state;

    }
}
import { LOGOUT, SET_USER } from "../../constants/auth";


export const setUser = () => {

    return {
        type: SET_USER,
        payload: "Tamara Ranisavljevic"
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}




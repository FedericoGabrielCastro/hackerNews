import { LOGIN, LOGOUT } from "../types";

const initialState = false

export const UserAuthReducer = (state = initialState, { type, check }) => {
    switch (type) {

        case LOGIN: {
            const newState = check
            localStorage.setItem("login", JSON.stringify(newState))
            return !newState
        } 
        case LOGOUT: {
            const newState = check
            return newState
        } 
    default:
        return state
    }
}

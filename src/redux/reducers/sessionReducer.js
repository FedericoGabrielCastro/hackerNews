import { SET_SESSION } from "../types" 

const initialState = ""

export const SessionReducer = (state = initialState, { type, userName }) => {
    switch (type) {

    case SET_SESSION: {
        const newState = userName
        return newState
    }
    default:
        return state
    }
}

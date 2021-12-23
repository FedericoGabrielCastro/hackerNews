import { GET_API, GET_API_ERROR } from "../types";

export const initialState = {
    info: [],
    error: null,
}

export const getApiReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_API:
            return { 
                ...state, 
                info: payload
            }
        case GET_API_ERROR:
            return { 
                ...state, 
                error: payload 
            }
    
            default:
        return state
    }
}

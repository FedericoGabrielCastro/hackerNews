import {
    REMOVE_FAVORITES_NEWS,
    ADD_FAVORITES_NEWS   
} from '../types'

const initialState = ""

export const SetFavoritesReducers = (state = initialState, { type, favorites }) => {
    switch (type) {

        case ADD_FAVORITES_NEWS:{
            const newState = [...state]
            newState.push(favorites)
            return newState
        }

        // IN PROGRESS -----------------------------------------
        case REMOVE_FAVORITES_NEWS:
                return { ...state, ...favorites }
        // IN PROGRESS -----------------------------------------        

    default:
        return state
    }
}

import { ADD_FAVORITES_NEWS } from '../types'

export const AddFavoriteNewsAction = (favorites) => ({
    type: ADD_FAVORITES_NEWS,
    favorites
})

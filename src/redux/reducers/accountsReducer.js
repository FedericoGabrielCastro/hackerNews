import { SET_ACCOUNT, ADD_ACCOUNT } from "../types"

export const initialState = []

export const AccountsReducer = (state = initialState, { type, accounts }) => {
    switch (type) {

        case SET_ACCOUNT: {
            const newState = accounts
            localStorage.setItem("ac", JSON.stringify(newState))
            return newState
        }
        case ADD_ACCOUNT: {
            const newState = [...state]
            newState.push(accounts)
            localStorage.setItem("ac", JSON.stringify(newState))
            return newState
        }
    default:
        return state
    }
}

import { SET_ACCOUNT } from "../types"

export const setAccountsAction = (accounts) => ({
    type: SET_ACCOUNT,
    accounts
})

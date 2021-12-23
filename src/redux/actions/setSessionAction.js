import { SET_SESSION } from "../types" 

export const SetSessionAction = (userName) => ({
    type: SET_SESSION,
    userName
})

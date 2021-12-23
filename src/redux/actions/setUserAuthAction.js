import { LOGIN, LOGOUT } from "../types";

export const UserLoginAction = (check) => ({
    type: LOGIN,
    check
})

export const UserLogoutAction = (check) => ({
    type: LOGOUT,
    check
})

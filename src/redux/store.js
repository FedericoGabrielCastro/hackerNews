import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import { SessionReducer } from "./reducers/sessionReducer";
import { AccountsReducer } from "./reducers/accountsReducer";
import { UserAuthReducer } from './reducers/setUserAuthReducer'
import { getApiReducer } from "./reducers/exampleApiReducer";
import { SetFavoritesReducers } from './reducers/setFavoritesRerducers'

const rootReducer = combineReducers ({
    SessionReducer: SessionReducer, // get userName user 
    AccountsReducer: AccountsReducer, // set y get accounts from the user
    UserAuthReducer: UserAuthReducer, // use to check user loggin
    getApiReducer: getApiReducer, // Get info from APi
    SetFavoritesReducers: SetFavoritesReducers // Add/remove news to favorite
})

export const store = createStore (
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
)

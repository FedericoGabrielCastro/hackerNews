import { SET_ACCOUNT, ADD_ACCOUNT } from "../../types
import { initialState, AccountsReducer } from "../accountsReducer"

describe('AccountsReducer test', () => {
    
    test('should return the initial state', () => {
        expect(AccountsReducer(undefined, {})).toEqual(initialState)
    })
    
    test('case SET_ACCOUNT', () => {
        const initialState = []
        
        expect(AccountsReducer(undefined, {
            type: SET_ACCOUNT,
            accounts: []
        })).toEqual({ initialState })
    });

    test('case ADD_ACCOUNT', () => {
        const initialState = [...state]
        
        expect(AccountsReducer(undefined, {
            type: ADD_ACCOUNT,
            accounts: [...state]
        })).toEqual({ initialState })
    });

});
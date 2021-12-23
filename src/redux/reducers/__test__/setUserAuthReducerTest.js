import { LOGIN, LOGOUT } from "../../types"
import { initialState, UserAuthReducer } from "../accountsReducer"

describe('UserAuthReducer test', () => {
    
    test('should return the initial state', () => {
        expect(UserAuthReducer(undefined, {})).toEqual(initialState)
    })
    
    test('case LOGIN', () => {

        const initialState = false
        
        expect(UserAuthReducer(undefined, {
            type: LOGIN,
            check: !initialState
        })).toNotEqual({ initialState })
    });

    test('case LOGOUT', () => {

        const initialState = false
        
        expect(UserAuthReducer(undefined, {
            type: LOGOUT,
            check: false
        })).toEqual({ initialState })
    });

});
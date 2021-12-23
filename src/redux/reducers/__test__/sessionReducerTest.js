import { SET_SESSION } from "../../types"
import { initialState, SessionReducer } from "../sessionReducer"

describe('SessionReducer test', () => {
    
    test('should return the initial state', () => {
        expect(SessionReducer(undefined, {})).toEqual(initialState)
    })
    
    test('case SET_NEWS', () => {

        const initialState = "test" 
        
        expect(SessionReducer(undefined, {
            type: SET_NEWS,
            userName: "test"  
        })).toEqual({ initialState })
    });

});
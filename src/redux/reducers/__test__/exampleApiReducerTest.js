import { GET_API, GET_API_ERROR } from "../../types"
import { initialState, getApiReducer } from "../exampleApiReducer"

describe('getApiReducer test', () => {
    
    test('should return the initial state', () => {
        expect(getApiReducer(undefined, {})).toEqual(initialState)
    })
    
    test('case GET_API', () => {
        expect(getApiReducer(undefined, {
            type: GET_API,
            info: initialState.info,
        })).toEqual({ 
            info : [],
         })
    });

    test('case GET_API_ERROR', () => {
        expect(getApiReducer(undefined, {
            type: GET_API_ERROR,
            error: initialState.error
        })).toEqual({ 
            error: null
        })
    });

});
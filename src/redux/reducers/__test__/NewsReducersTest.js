import { SET_NEWS, ADD_NEWS } from "../../types"
import { initialState, NewsReducers } from "../NewsReducers"

describe('NewsReducers test', () => {
    
    test('should return the initial state', () => {
        expect(NewsReducers(undefined, {})).toEqual(initialState)
    })
    
    test('case SET_NEWS', () => {

        const initialState = {}
        
        expect(NewsReducers(undefined, {
            type: SET_NEWS,
            news: {} 
        })).toEqual({ initialState })
    });

    test('case ADD_NEWS', () => {

        const initialState = {...state}
        
        expect(NewsReducers(undefined, {
            type: ADD_NEWS,
            check: {...state}
        })).toEqual({ initialState })
    });

});
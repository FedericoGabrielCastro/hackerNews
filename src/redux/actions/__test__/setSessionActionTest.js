import { SetSessionAction } from  "../setSessionAction" 
import { SET_SESSION } from "../../types"

describe('SetSessionAction Action', () => {
    
    test('test type SetSessionAction', () => {
        
        const action = SetSessionAction()

        expect(action.type).toEqual(SET_SESSION)
    });
});
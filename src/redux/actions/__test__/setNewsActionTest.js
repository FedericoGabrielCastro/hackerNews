import { setNewsAction } from  "../setNewsAction" 
import { SET_NEWS } from "../../types"

describe('setNewsAction Action', () => {
    
    test('test type setNewsAction', () => {
        
        const action = setNewsAction()

        expect(action.type).toEqual(SET_NEWS)
    });
});
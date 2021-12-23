import { AddAccountAction } from  "../addAccountAction" 
import { ADD_ACCOUNT } from "../../types"

describe('Add Account Action', () => {
    
    test('test type action', () => {
        
        const action = AddAccountAction()

        expect(action.type).toEqual(ADD_ACCOUNT)
    });
});
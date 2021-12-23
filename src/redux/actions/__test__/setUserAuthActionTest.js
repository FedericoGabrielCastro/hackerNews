import { UserLoginAction, UserLogoutAction } from  "../setUserAuthAction" 
import { LOGIN, LOGOUT} from "../../types"

describe('User login/logout Actions', () => {
    
    test('test type UserLoginAction', () => {
        
        const action = UserLoginAction()

        expect(action.type).toEqual(LOGIN)
    });

    test('test type UserLogoutAction', () => {
        
        const action = UserLogoutAction()

        expect(action.type).toEqual(LOGOUT)
    });
});
import {getAPiAction} from '../exampleApiAction'
import mockAxios from 'axios'
import createMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';

import { GET_API, GET_API_ERROR } from '../../types';

const mockStore = createMockStore([thunk])

describe('axios test', () => {
    
    test('should handle getAPiAction success', async () => {
        mockAxios.get.mockImplementationOnce(() => 
            Promise.resolve({data: [{ id: 1 }]}))

        const store = mockStore()
        await store.dispatch(getAPiAction())

        const actions = store.getActions()
        const expectedActions = [{
            type: GET_API
        }]
        expect(actions).toEqual(expectedActions)
    });

    test('should handle getAPiAction fail ', async () => {
        mockAxios.get.mockImplementationOnce(() => 
            Promise.resolve({ response: { data: 'error' }}))

            const store = mockStore()
            await store.dispatch(getAPiAction())
            const actions = store.getActions()
            const expectedActions = [{
                type: GET_API_ERROR
            }]
            expect(actions).toEqual(expectedActions)
    })
});
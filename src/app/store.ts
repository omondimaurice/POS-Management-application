
import { ADD_POS, REMOVE_POS, REMOVE_ALL_POS } from './actions';
import{IPOS} from './IPOS'


export interface IAppState {

        posar: IPOS[];
        lastUpdate: Date;
    }
    export const INITIAL_STATE: IAppState = {
        posar: [],
        lastUpdate: null
    }
    
    export function rootReducer(state: IAppState, action): IAppState {

    switch (action.type) {
        case ADD_POS:
            action.todo.id = state.posar.length + 1;    
            return Object.assign({}, state, {
                posar: state.posar.concat(Object.assign({}, action.todo)),
                lastUpdate: new Date()
            })
        case REMOVE_POS:
            return Object.assign({}, state, {
                posar: state.posar.filter(t => t.id !== action.id),
                lastUpdate: new Date()
            })
        case REMOVE_ALL_POS:
            return Object.assign({}, state, {
                todos: [],
                lastUpdate: new Date()
            })
    }
}

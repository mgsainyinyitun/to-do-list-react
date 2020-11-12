import {createStore} from 'redux';
import {itemReducer} from './reducers/index';

export const store = createStore(itemReducer);
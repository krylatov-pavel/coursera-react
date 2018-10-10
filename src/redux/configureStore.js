import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

export const ConfigureStore = function () {
    const store = createStore(Reducer, initialState);

    return store;
}
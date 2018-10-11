import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promos } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = function () {
    const store = createStore(combineReducers({
        dishes: Dishes,
        leaders: Leaders,
        promos: Promos,
        comments: Comments
    }), applyMiddleware(thunk, logger));

    return store;
};
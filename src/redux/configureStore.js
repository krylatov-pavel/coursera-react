import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promos } from './promotions';
import { Leaders } from './leaders';
import { InitialFeedback } from './forms';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = function () {
    const store = createStore(combineReducers({
        dishes: Dishes,
        leaders: Leaders,
        promos: Promos,
        comments: Comments,
        ...createForms({
            feedback: InitialFeedback
        })
    }), applyMiddleware(thunk, logger));

    return store;
};
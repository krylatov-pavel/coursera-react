import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';

export const initialState = {
    dishes: DISHES,
    leaders: LEADERS,
    promos: PROMOTIONS,
    comments: COMMENTS
};

export const Reducer = function (state = initialState, action) {
    return state;
};
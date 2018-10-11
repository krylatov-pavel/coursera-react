import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

export const addComment = function (dishId, rating, author, comment) {
    return {
        type: ActionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
        }
    };
};

export const fetchDishes = function () {
    return function (dispatch) {
        dispatch(dishesLoading());

        setTimeout(() => dispatch(addDishes(DISHES)), 2000);
    }
}

export const dishesLoading = function () {
    return {
        type: ActionTypes.DISHES_LOADING
    };
};

export const addDishes = function (dishes) {
    return {
        type: ActionTypes.ADD_DISHES,
        payload: dishes
    };
};

export const dishesFailed = function (errMess) {
    return {
        type: ActionTypes.DISHES_FAILED,
        payload: errMess
    };
};
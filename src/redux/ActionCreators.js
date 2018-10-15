import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/config';

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

        fetch(baseUrl + 'dishes')
            .then(response => response.json())
            .then(dishes => dispatch(addDishes(dishes)));
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

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = function (comments) {
    return {
        type: ActionTypes.ADD_COMMENTS,
        payload: comments
    };
};

export const fetchPromos = () => (dispatch) => {

    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});
import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/config';

export const addComment = function (comment) {
    return {
        type: ActionTypes.ADD_COMMENT,
        payload: comment
    };
};

export const postComment = function (dishId, rating, author, comment) {
    return function (dispatch) {
        const newComment = {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
        };

        fetch(baseUrl + 'comments', {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'same-origin'
        }).then(handleResponse)
            .then(response => response.json())
            .then(comment => dispatch(addComment(comment)))
            .catch(error => dispatch(commentsFailed(error.message)));
    }
}

export const fetchDishes = function () {
    return function (dispatch) {
        dispatch(dishesLoading());

        fetch(baseUrl + 'dishes')
            .then(handleResponse, handleError)
            .then(response => response.json())
            .then(dishes => dispatch(addDishes(dishes)))
            .catch(error => dispatch(dishesFailed(error.message)));

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
        .then(handleResponse, handleError)
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
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
        .then(handleResponse, handleError)
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
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

const handleResponse = function (response) {
    if (response.ok) {
        return response;
    } else {
        var error = new Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        throw error;
    }
};

const handleError = function (error) {
    throw new Error(error.message);
};
import * as ActionTypes from '../redux/ActionTypes';

export const Promos = function (state = { promos: [], isLoading: false, errMess: null }, action) {
    switch (action.type) {
        case ActionTypes.ADD_PROMOS:
            return { ...state, isLoading: false, errMess: null, promos: action.payload };

        case ActionTypes.PROMOS_LOADING:
            return { ...state, isLoading: true, errMess: null, promos: [] }

        case ActionTypes.PROMOS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};
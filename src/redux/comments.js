import * as ActionTypes from './ActionTypes';

export const Comments = function (state = { comments: [], errMess: null }, action) {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, comments: action.payload, errMess: null };
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return {
                ...state, comments: state.comments.concat(comment), errMess: null
            };
        case ActionTypes.COMMENTS_FAILED:
            return { ...state, errMess: action.payload };
        default:
            return state;
    }
};
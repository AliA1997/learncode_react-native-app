import * as ActionTypes from '../../actionTypes';
import initialState from '../../initialState';

const reducer = (state=initialState.criticism, action) => {
    switch(action.type) {
        case ActionTypes.CHANGE_CREATE_TUTORIAL_CRITICISM_FORM:
            return Object.assign({}, state, {
                createTutorialCriticismForm: action.form
            });
        case ActionTypes.CHANGE_CREATE_EDUCATOR_CRITICISM_FORM:
            return Object.assign({}, state, {
                createEducatorCriticismForm: action.form
            });
        case ActionTypes.CHANGE_UPDATE_TUTORIAL_CRITICISM_FORM:
            return Object.assign({}, state, {
                updateTutorialCriticismForm: action.form
            });
        case ActionTypes.CHANGE_CREATE_EDUCATOR_CRITICISM_FORM:
            return Object.assign({}, state, {
                updateEducatorCriticismForm: action.form
            });
        default:
            return state;
    }
}

export default reducer;